
const apiKey = API_KEY;
const filler = "{ANS}";
const parameters = {
    "Video Games": [
        `The genres include ${filler}.`,
        `The themes include ${filler}.`,
        `The works are similar to those of developers ${filler}.`,
        `The length is ${filler}.`,
        `The work was released around ${filler}.`,
        `The difficulty is as important as ${filler} on a scale of 10.`,
        `The plot is as important as ${filler} on a scale of 10.`,
    ],

    "Books": [
        `The genres include ${filler}.`,
        `The themes include ${filler}.`,
        `The works are similar to those of authors ${filler}.`,
        `The language should be ${filler}.`,
        `The work was released around ${filler}.`,
        `The length is ${filler}.`,
        `Character development is as ${filler} on a scale of 10.`,
        `The plot is as important as ${filler} on a scale of 10.`,
    ],

    "TV Shows": [
        `The genres include ${filler}.`,
        `The themes include ${filler}.`,
        `It features actors such as ${filler}.`,
        `It is stylistically similar to directors such as ${filler}.`,
        `The language should be ${filler}.`,
        `The work was released around ${filler}.`,
        `The length is ${filler}.`,
        `Character development is as important as ${filler} on a scale of 10.`,
        `The plot is as important as ${filler} on a scale of 10.`,
    ],

    "Movies": [
        `The genres include ${filler}.`,
        `The themes include ${filler}.`,
        `It features actors such as ${filler}.`,
        `It is stylistically similar to directors such as ${filler}.`,
        `The language should be ${filler}.`,
        `The work was released around ${filler}.`,
        `The length is ${filler}.`,
        `Character development is as important as ${filler} on a scale of 10.`,
        `The plot is as important as ${filler} on a scale of 10.`,
    ],

    "Music": [
        `The genres include ${filler}.`,
        `It is similar to the works of artists ${filler}.`,
        `It is similar to the songs ${filler}`,
        `The language should be ${filler}.`,
        `The work was released around ${filler}.`,
    ],
}

async function testQuestion(
    selections,
    type,
    numOfChoices
) {
    const API_URL = "https://api.openai.com/v1/completions";
    let prompt = "You are a media recommender, where you recommend various forms of media. Here is what I am requesting: \n"
            + ` * It is classified as ${type}.\n`
            + ` * Give at most ${numOfChoices} choices.`;
    let parametersToAdd = parameters[type];
    for (let i = 0; i < selections.length; i++)
    {
        let query = performReplacement(parametersToAdd[i], selections[i]);        
        if (query != null)
        {
            prompt += "\n * " + query;
        }
    }
    console.log(prompt);
    return " 1. Rihanna - \"Umbrella\" (2007) - Pop 2. Ariana Grande - \"7 Rings\" (2019) - Pop 3. Rihanna - \"Disturbia\" (2008) - Pop/R&B 4. Ariana Grande - \"God is a Woman\" (2018) - Pop 5. Rihanna - \"Stay\" (2012) - Pop/R&B";
    /*
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiKey
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: prompt,
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
    */
}

function performReplacement(string, value)
{
    if (value == null)
    {
        return null;
    }
    let valToString = "";
    if (Array.isArray(value))
    {
        if (value.length == 0)
        {
            return null;
        }
        if (value.length == 1)
        {
            valToString = value[0];
        }
        else {
            for (let i = 0; i < value.length - 1; i++)
            {
                valToString += (value[i] + ", ");
            }
            valToString += (" and " + value[value.length - 1]);
        }
    }
    else if (!/\w/.test(value))
    {
        return null;
    }
    else
    {
        valToString = value + "";
    }
    return string.replace(filler, valToString);
}