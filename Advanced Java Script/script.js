// Ye ek async function hai jo API se data fetch karega.
async function fetchData() {
    console.log("Data fetch karna shuru kar rahe hain...");
    
    // Data display karne wale container ko select kar lete hain.
    const dataContainer = document.getElementById("data-container");

    // try...catch block ka use kar rahe hain taaki network error handle kar sakein.
    try {
        // Step 1: fetch request bhejo aur response ka intezaar karo.
        // 'await' yahan par script ko rokega jab tak response na aa jaaye.
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

        // Step 2: Response ko JSON format mein parse karo aur data ka intezaar karo.
        const data = await response.json();
        
        console.log("Data fetch ho gaya hai:", data);

        // Step 3: Fetch kiye gaye data ko HTML mein dikhao.
        dataContainer.innerHTML = `
            <h2>Fetched Data</h2>
            <p><strong>User ID:</strong> ${data.userId}</p>
            <p><strong>Title:</strong> ${data.title}</p>
            <p><strong>Completed:</strong> ${data.completed}</p>
        `;

    } catch (error) {
        console.error("Data fetch karne mein error aaya:", error);
        dataContainer.innerHTML = "Sorry, data fetch nahi ho paaya. Please try again later.";
    }
}

// Function ko call karte hain taaki wo chale.
fetchData();