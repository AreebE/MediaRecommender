const resultsElement = document.getElementById("responseSection")

testQuestion(
    [
        ["Rihanna", "Ariana Grande"],
        ["Creepy", "Action", "Fantasy", "Historical"],
        "from the 1970s to the 2010s"
    ],
    'Music',
    5
).then(
    (result) =>
        {
            
            resultsElement.replaceChildren([]);
            let choices = result.split(/\d\./g);
            for (let i = 1; i < choices.length; i++)
            {
                let element = document.createElement("p");
                element.innerHTML = `${i}. ${choices[i]}`;
                resultsElement.appendChild(element);
            }
        },
    (failure) =>
        {
            resultsElement.innerHTML = result;
        }
);