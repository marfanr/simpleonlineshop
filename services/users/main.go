package main

import (
	"context"
	"fmt"
	"log"
	"net"
	"net/http"
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/golang/protobuf/ptypes/empty"
	"github.com/marfanr/simpleonlineshop/services/users/model"
	amqp "github.com/rabbitmq/amqp091-go"
	"google.golang.org/grpc"
)

type UsersServer struct{}

// var localStorage *model.UserList

func (UsersServer) Register(ctx context.Context, param *model.User) (*empty.Empty, error) {
	// localStorage.List = append(localStorage.List, param)
	return new(empty.Empty), nil
}

func (UsersServer) Auth(ctx context.Context, param *model.AuthParam) (*model.User, error) {
	return &model.User{}, nil
}

func main() {
	r := chi.NewRouter()
	// set up for
	// localStorage = new(model.UserList)
	// localStorage.List = make([]*model.User, 0)

	srv := grpc.NewServer()
	var userSrv model.UsersServer
	model.RegisterUsersServer(srv, userSrv)
	l, e := net.Listen("tcp", ":7070")
	if e != nil {
		fmt.Println("cannot start grpc services")
	}
	go srv.Serve(l)
	fmt.Println("grpc services running on :7070")

	// setup rabbitmq with retry method
	conn := make(chan *amqp.Connection, 5)
	go func(c chan *amqp.Connection) {
		ntry := 0
		c <- nil
		for true {
			conn, err := amqp.Dial("amqp://admin:admin@rabbitmq-con.default.svc.cluster.local")
			if err != nil {
				log.Println(err)
				if ntry <= 10 {
					time.Sleep(10 * time.Second)
				} else if ntry <= 20 {
					time.Sleep(1 * time.Minute)
				} else {
					time.Sleep(3 * time.Minute)
				}
				ntry += 1
			} else {
				log.Println("Rabbitmq connection success")
				ntry = 0
				c <- conn
				time.Sleep(5 * time.Minute)
			}
		}
	}(conn)
	con := <-conn
	defer con.Close()
	// ch, _ := conn.Channel()
	// ch.QueueDeclar  e("hello", false, false, false, false, nil)

	// body := "Hello World!"
	// ch.Publish(
	// 	"",    // exchange
	// 	"w",   // routing key
	// 	false, // mandatory
	// 	false, // immediate
	// 	amqp.Publishing{
	// 		ContentType: "text/plain",
	// 		Body:        []byte(body),
	// 	})
	// failOnError(err, "Failed to publish a message")
	// log.Printf(" [x] Sent %s\n", body)

	var port = ":3535"
	r.Use(middleware.Logger)
	r.Get("/v1/get", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello World!"))
	})
	// run servers
	fmt.Println("Service running on", port)
	http.ListenAndServe(port, r)
}
