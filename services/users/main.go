package main

import (
	"fmt"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func main() {
	r := chi.NewRouter()
	var port = ":3535"
	r.Use(middleware.Logger)
	r.Get("/api/v1/get", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello World!"))
	})
	fmt.Println("Service running on", port)
	http.ListenAndServe(port, r)
}
