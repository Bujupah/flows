package main

import (
	"fmt"
	"net/http"
	"os"
	"path/filepath"
	"strings"
)

func main() {
	build := http.FileServer(http.Dir("build"))

	// Define request handler function
	handler := func(w http.ResponseWriter, r *http.Request) {
		if strings.HasPrefix(r.URL.Path, "/plugins") {
			// Get the file path by replacing "/plugins" with "plugins" and removing any trailing slashes
			filePath := strings.TrimPrefix(r.URL.Path, "/plugins")
			filePath = strings.TrimPrefix(filePath, "/")
			filePath = filepath.Join("plugins", filePath)

			// Check if the file exists
			if _, err := os.Stat(filePath); os.IsNotExist(err) {
				fmt.Println("File not found: " + filePath)
				http.NotFound(w, r)
				return
			}
			http.ServeFile(w, r, filePath)
		} else {
			build.ServeHTTP(w, r)
		}
	}

	// Register the request handler function
	http.HandleFunc("/", handler)

	// Start the server
	err := http.ListenAndServe(":3000", nil)
	if err != nil {
		panic(err)
	}
	fmt.Println("Server started on port 3000")
}
