
const apiKey = API_KEY;

async function testQuestion() {
    const API_URL = "https://api.openai.com/v1/completions";
    // Define the properties and data for the API request
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiKey
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: "What is time?",
            max_tokens: 2048,
            temperature: 0.2,
            n: 1,
            stop: null
        })
    }
    console.log(requestOptions);
    // Send POST request to API, get response and set the reponse as paragraph element text
    try {
        const response = await (await fetch(API_URL, requestOptions)).json();
        return response.choices[0].text.trim();
    } catch (error) { // Add error class to the paragraph element and set error text
      
        return "Oops! Something went wrong while retrieving the response. Please try again.";
    }
}