
function loadItems(
    numOfRecommendations,
    type,
    selections,
    documentToUse
)
{
    let resultsElement = documentToUse.getElementById("responseSection");
    getRecommendations(
        numOfRecommendations,
        type,
        selections
    ).then(
        (result) =>
            {
                
                resultsElement.replaceChildren([]);
                let choices = result.split(/\d\./g);
                for (let i = 1; i < choices.length; i++)
                {
                    let container = document.createElement("div");
                    let title = document.createElement("p");
                    title.innerHTML = `${i}. ${choices[i]}`;
                    let summary = document.createElement("p");
                    sleep(2000 * i).then(() => getSummary(choices[i]).then(
                        (result) => {
                            summary.innerHTML = result;
                        },
                        (failure) => {
                            summary.innerHTML = failure;
                        }
                    ));
                    
                    container.appendChild(title);
                    container.appendChild(summary);
                    resultsElement.appendChild(container);
                }
            },
        (failure) =>
            {
                let element = document.createElement("p");
                element.innerHTML = failure;
                resultsElement.replaceChildren([element]);
            }
    );
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
