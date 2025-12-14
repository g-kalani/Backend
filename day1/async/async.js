// --- Asynchronous JavaScript (Async JS) Concepts ---

// 1. Synchronous (Sync) vs. Asynchronous (Async)

// Synchronous (Sync): Code executes sequentially, blocking the main thread.
function sync_example() {
    console.log("1. Start Sync Task");
    // Simulate a long operation by blocking the main thread for ~1 second
    let start = Date.now();
    while (Date.now() - start < 1000) {}
    console.log("2. Sync Task Complete (1 second)");
}

// Asynchronous (Async): Code execution does not block the main thread. 
// Tasks are delegated (e.g., to Web APIs) and handled later via the Event Loop.
function async_example() {
    console.log("3. Start Async Task");
    setTimeout(() => {
        console.log("5. Async Task Complete (executed later)");
    }, 0); 
    console.log("4. Sync code continues immediately after starting the async task");
}

sync_example();
async_example();

// 2. Promises and Error Handling (The Async "Story")

// A Promise is an object representing the eventual completion or failure of 
// an asynchronous operation.
function create_promise(shouldResolve) {
    return new Promise((resolve, reject) => {
        if (shouldResolve) {
            setTimeout(() => resolve("Data fetched successfully!"), 500);
        } else {
            setTimeout(() => reject(new Error("Failed to fetch data.")), 500);
        }
    });
}

// .then() and .catch() methods handle the resolved/rejected states of a Promise.
create_promise(true)
    .then(result => {
        console.log("Promise Resolved:", result);
    })
    .catch(error => {
        console.error("Promise Rejected:", error.message);
    });

// 3. Async/Await (Syntactic Sugar over Promises)

// async function: Makes a function return a Promise implicitly.
// await: Pauses the async function's execution until the Promise settles.

// Use Case: Fetching Data from an API
// (Based on image_b433b7.png)
async function fetchRandomUser() {
    // try...catch handles errors for network failures or JSON parsing errors.
    try {
        // Step 1: Fetch the data blob (Response object)
        var blob = await fetch('https://randomuser.me/api/');
        
        // Step 2: Convert the blob to a parsed JSON object
        var ans = await blob.json();

        // Step 3: Access and log the data
        console.log("Fetched User Name:", ans.results[0].name);

    } catch (error) {
        console.error("API Fetch Error:", error.message);
    }
}

fetchRandomUser(); // Calls the async function

// 4. Simple Function Return (Synchronous)
// (Based on image_be2fe3.png)
function abcd_return() {
    return "hello world";
}

var ans = abcd_return();
console.log("Simple Function Return:", ans); 


// --- Advanced Async Concepts ---

// 5. Concurrency and Parallelism

// Concurrency: Handling multiple tasks over time by rapidly switching 
// execution on a single core (JS Event Loop). 
function concurrent_tasks() {
    console.log("Concurrent Task 1 started.");
    setTimeout(() => console.log("Concurrent Task 2 complete."), 100);
    console.log("Concurrent Task 1 finished (non-blocking).");
}
concurrent_tasks();

// Parallelism: Executing multiple tasks simultaneously using multiple CPU cores 
// (e.g., using Web Workers, not demonstrated here).

// 6. Throttling

// Throttling limits how often a function can be executed over a given time period.
// This is crucial for performance (e.g., handling rapid scroll or resize events).

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const context = this;
        const args = arguments;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Example usage of a throttled function:
let updateScroll = () => console.log("Scroll event fired and processed.");

// Create a throttled version that runs at most once every 1000ms (1 second).
const throttledScrollHandler = throttle(updateScroll, 1000);

// Simulate rapid calls to demonstrate throttling:
console.log("--- Throttling Test Start (1000ms limit) ---");
throttledScrollHandler(); // 0ms: EXECUTES (sets timer)
throttledScrollHandler(); // 10ms: IGNORED (inThrottle = true)
throttledScrollHandler(); // 500ms: IGNORED
setTimeout(() => {
    throttledScrollHandler(); // 1001ms: EXECUTES (timer expired)
    console.log("--- Throttling Test End ---");
}, 1001);