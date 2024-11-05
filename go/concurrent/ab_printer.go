/**
 * @description: Print 'a' and 'b' alternatively
 * @author: Yuting Xie
 * @date: Oct 20, 2024
 */

package concurrent

import (
	"fmt"
	"go_folder/runner"
	"sync"
)

type AbPrinter struct {
	runner.AbstractRunner
}

type AbPrinterFactory struct {
	runner.AbstractRunnerFactory
}

func (*AbPrinterFactory) MakeRunner() runner.AbstractRunner {
	return &AbPrinter{}
}

func (*AbPrinter) Run() {
	// Create a wait group of two tasks to wait
	var wg sync.WaitGroup
	wg.Add(2)

	// Create two channels: one to trigger thread A and the other to trigger thread B
	chA := make(chan bool, 1)
	chB := make(chan bool, 1)
	defer close(chA)
	defer close(chB)

	// Start the two routines for printing A and B respectively
	go func() {
		for i := 0; i < 50; i += 1 {
			<-chA
			fmt.Println("A: ", i)
			chB <- true
		}

		fmt.Println("Worker A finishes")

		wg.Done()
	}()

	go func() {
		for i := 0; i < 50; i += 1 {
			<-chB
			fmt.Println("B: ", i)
			chA <- true
		}

		fmt.Println("Worker B finishes")

		wg.Done()
	}()

	chA <- true

	wg.Wait()
}
