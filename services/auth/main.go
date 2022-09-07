package main

import (
	"context"
	"log"

	"github.com/marfanr/simpleonlineshop/services/auth/model"
	"google.golang.org/grpc"
	"google.golang.org/protobuf/types/known/emptypb"
)

func main() {
	c, err := grpc.Dial(":7070", grpc.WithInsecure())
	if err != nil {
		log.Println("could not connect to user services")
	}
	u := model.NewUsersClient(c)
	u.Register(context.Background(), &model.User{
		Name:     "ARfan",
		Id:       "2",
		Password: "kaj",
	})
	m, _ := u.List(context.Background(), &emptypb.Empty{})
	println(m.GetList())
}
