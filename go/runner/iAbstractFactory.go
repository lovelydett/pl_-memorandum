package runner

type AbstractRunner interface {
	Run()
}

type AbstractRunnerFactory interface {
	MakeRunner() AbstractRunner
}
