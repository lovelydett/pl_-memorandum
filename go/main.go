package main

import (
	"fmt"
	"go_folder/concurrent"
	"go_folder/runner"
	"os"
)

func GetRunnerFactory(name string) (runner.AbstractRunnerFactory, error) {
	if name == "ab_printer" {
		return &concurrent.AbPrinterFactory{}, nil
	}

	return nil, fmt.Errorf("no this runner: %s", name)
}

func main() {
	fmt.Println("Begin!")
	factory, err := GetRunnerFactory("ab_printer")
	if err != nil {
		os.Exit(-1)
	}

	runner := factory.MakeRunner()
	runner.Run()

	fmt.Println("Finished!")
}
