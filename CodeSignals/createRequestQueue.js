// You're working on the infrastructure for an application, which involves processing code execution requests and returning the results. You've been tasked with creating an interface that accepts asynchronous code execution requests, processes them in order, and returns the results.

// Requirements
// Implement a factory function, createRequestQueue. This function returns a request queue that must adhere to the following interface.

// interface RequestQueue {
  /**
   * Add a request with the given ID to the end of the queue.
   *
   * A request is a function that returns a promise resolving to a string.
   *
   * Enqueue should return a promise that resolves when the
   * enqueued function is processed, with the resolved value of the request.
   *
   * However, the promise returned by "enqueue" should be rejected
   * if the request is canceled before being processed.
   */
//   enqueue(id: number, request: () => Promise<string>): Promise<string>;
  /**
   * Cancel the request with the given ID.
   * If no request with that ID is found, do nothing.
   */
//   cancel(id: number): void;
  /**
   * Process the next request in the queue, in FIFO order.
   * Should not throw an error or be rejected even if the request does.
   * Resolves to true if the queued request resolved;
   * resolves to false if the queued request
   * rejected or threw an error.
   */
//   processNext(): Promise<boolean>;
  /**
   * Return the current size of the queue.
   */
//   size(): number;
// }

// Note that this interface is provided using type annotations for clarity, although the language of this task is JavaScript. Feel free to use ES6 classes, simple objects, or whatever you think makes the most sense.
// Hints
// You are permitted to reference JavaScript language documentation, as long as you do not copy or share any code.
// Your code will be scored by the unit tests in tests.js (this file is visible but read-only).

// [execution time limit] 10 seconds


function createRequestQueue() {
};