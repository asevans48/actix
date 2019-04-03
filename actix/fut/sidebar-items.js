initSidebarItems({"enum":[["Either","Combines two different futures yielding the same item and error types into a single type."]],"fn":[["err","Creates a \"leaf future\" from an immediate value of a failed computation."],["ok","Creates a \"leaf future\" from an immediate value of a finished and successful computation."],["result","Creates a new \"leaf future\" which will resolve with the given result."],["wrap_future","Converts normal future into `ActorFuture`, allowing its processing to use the actor's state."],["wrap_stream","Converts normal stream into `ActorStream`"]],"struct":[["AndThen","Future for the `and_then` combinator, chaining a computation onto the end of another future which completes successfully."],["DropErr",""],["Finish","A combinator used to convert a stream into a future; the future resolves when the stream completes."],["FromErr","Future for the `from_err` combinator, changing the error type of a future."],["FutureResult","A future representing a value that is immediately ready."],["FutureWrap",""],["Map","Future for the `map` combinator, changing the type of a future."],["MapErr","Future for the `map_err` combinator, changing the error type of a future."],["StreamAndThen","A stream combinator which chains a computation onto values produced by a stream."],["StreamFinish","A combinator used to convert stream into a future, future resolves when stream completes."],["StreamFold","A future used to collect all the results of a stream into one generic type."],["StreamMap","A stream combinator which will change the type of a stream from one type to another."],["StreamMapErr","A stream combinator which will change the error type of a stream from one type to another."],["StreamThen","A stream combinator which chains a computation onto each item produced by a stream."],["StreamTimeout","Future for the `timeout` combinator, interrupts computations if it takes more than `timeout`."],["StreamWrap",""],["Then","Future for the `then` combinator, chaining computations on the end of another future regardless of its outcome."],["Timeout","Future for the `timeout` combinator, interrupts computations if it takes more than `timeout`."]],"trait":[["ActorFuture","Trait for types which are a placeholder of a value that may become available at some later point in time."],["ActorStream","A stream of values, not all of which may have been produced yet."],["IntoActorFuture","Class of types which can be converted into an actor future."],["WrapFuture","Helper trait that allows conversion of normal future into `ActorFuture`"],["WrapStream","Helper trait that allows conversion of normal stream into `ActorStream`"]]});