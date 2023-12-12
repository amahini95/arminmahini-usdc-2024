/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    var result = {
        "SearchTerm": "",
        "Results": []
    };

    // ALWAYS assign result[SearchTerm] = searchTerm
    result['SearchTerm'] = searchTerm;

    // Use searchTerm to search through each Text property within scannedTextObj[Content][Text]
    scannedTextObj.forEach((book, book_index) => {
        // If searchTerm exists in scannedTextObj[Content][Text], then Update result[Results]
        
        book.Content.forEach((phrase, index) => {
            const words = phrase.Text.split(' ');
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
            if (words.includes(searchTerm)){
                result.Results.push({
                    "ISBN": scannedTextObj[book_index].ISBN,
                    "Page": scannedTextObj[book_index].Content[index].Page,
                    "Line": scannedTextObj[book_index].Content[index].Line
                });
            }
        });
        
    });
    
    return result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]

const noBook = []

const noBookOut = {
    "SearchTerm": "where",
    "Results": [    
    ]
}

const multBooks = [
    {
        "Title": "Tuesdays with Morrie",
        "ISBN": "9780767905923",
        "Content": [
            {
                "Page": 5,
                "Line": 4,
                "Text": "He had always been a dancer, my old professor."
            },
            {
                "Page": 10,
                "Line": 26,
                "Text": "Morrie would walk that final bridge between life and death, and narrate the trip."
            },
            {
                "Page": 20,
                "Line": 23,
                "Text": "\"Don\'t feel bad. I\'ve only seen \'Oprah\' once.\""
            } 
        ] 
    },
    {
        "Title": "Atomic Habits",
        "ISBN" : "9780835211292",
        "Content": [
            {
                "Page": 7,
                "Line": 6,
                "Text": "But with better habits, anything is possible."
            },
            {
                "Page": 15,
                "Line": 12,
                "Text": "Too often, we convince ourselves that massive success requires massive action."
            }
        ]
    }
]

const multBooksOut = {
    "SearchTerm": "that",
    "Results": [
        { 
            "ISBN": "9780767905923", 
            "Page": 10, 
            "Line": 26 
        },
        { 
            "ISBN": "9780835211292", 
            "Page": 15, 
            "Line": 12 
        }
    ]
}

const multBooksNoContent = [
    {
        "Title": "Star Wars, Episode III: Revenge of the Sith",
        "ISBN": "9780345428844",
        "Content": [] 
    },
    {
        "Title": "Naruto: The Official Character Data Book",
        "ISBN" : "9781421541259",
        "Content": []
    }
]

const multBooksNoContentOut = {
    "SearchTerm": "technique",
    "Results": []
}

/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

const twentyLeaguesOut2 = {
    "SearchTerm": "Canadian\'s",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

const twentyLeaguesOut3 = {
    "SearchTerm": "The",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        }
    ]
}

const twentyLeaguesOut4 = {
    "SearchTerm": "i",
    "Results": [      
    ]
}

const twentyLeaguesOut5 = {
    "SearchTerm": "However",
    "Results": [      
    ]
}

/*
/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */

const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

// Positive
const test3result = findSearchTermInBooks("Canadian\'s", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut2) === JSON.stringify(test3result)) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", twentyLeaguesOut2);
    console.log("Received:", test3result);
}

const test4result = findSearchTermInBooks("The", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut3) === JSON.stringify(test4result)) {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", twentyLeaguesOut3);
    console.log("Received:", test4result);
}

// Negative
const test5result = findSearchTermInBooks("i", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut4) === JSON.stringify(test5result)) {
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected:", twentyLeaguesOut4);
    console.log("Received:", test5result);
}

// Case Sensitive
const test6result = findSearchTermInBooks("However", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut5) === JSON.stringify(test6result)) {
    console.log("PASS: Test 6");
} else {
    console.log("FAIL: Test 6");
    console.log("Expected:", twentyLeaguesOut5);
    console.log("Received:", test6result);
}

// No books
const test7result = findSearchTermInBooks("where", noBook);
if (JSON.stringify(noBookOut) === JSON.stringify(test7result)) {
    console.log("PASS: Test 7");
} else {
    console.log("FAIL: Test 7");
    console.log("Expected:", noBookOut);
    console.log("Received:", test7result)
}

// Books, with content
const test8result = findSearchTermInBooks("that", multBooks);
if (JSON.stringify(multBooksOut) === JSON.stringify(test8result)) {
    console.log("PASS: Test 8");
} else {
    console.log("FAIL: Test 8");
    console.log("Expected:", multBooksOut);
    console.log("Received:", test8result);
}

// Books, but no content
const test9result = findSearchTermInBooks("technique", multBooksNoContent);
if (JSON.stringify(multBooksNoContentOut) === JSON.stringify(test9result)) {
    console.log("PASS: Test 9");
} else {
    console.log("FAIL: Test 9");
    console.log("Expected:", multBooksNoContentOut);
    console.log("Received:", test9result);
}