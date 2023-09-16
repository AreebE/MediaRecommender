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
            console.log(result);
        },
    (failure) =>
        {
            console.log(failure);
        }
);