// Because classes are not hoised you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;

    // create a reference to the ".expandButton" class.
    this.expandButton = this.domElement.querySelector(".expandButton");

    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = "expand";

    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener("click", () => this.toggleArticle());

  }

  toggleArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle("article-open");
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles 
NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/


//CREATE COMPONENT STRETCH
{/* <div class="article">
        <h2>Lambda School Students: "We're the best!"</h2>
        <p class="date">Nov 5th, 2017</p>

        <p>Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.</p>
        <span class='expandButton'></span>
      </div> */}


info = {
  "heading": "A Heading",
  "date": "Jan 30th, 2019",
  "content": ["Dagobah hutt jawa leia calamari ventress skywalker yoda.", "Dagobah hutt jawa leia calamari ventress skywalker yoda."] 
}

function createArticle(articleData) {
  //creates an article element
  let article = document.createElement("div");
  article.setAttribute("class", "article");

  //creates a heading and appends text to it. Then adds it to the article.
  let heading = document.createElement("h2");
  let nodeOne = document.createTextNode(articleData.heading);
  heading.appendChild(nodeOne);
  article.appendChild(heading);

  let date = document.createElement("p");
  date.setAttribute("class", "date");
  let nodeTwo = document.createTextNode(articleData.date);
  date.appendChild(nodeTwo);
  article.appendChild(date);

  articleData.content.forEach(paragraph => {
    let para = document.createElement("p");
    let textNode = document.createTextNode("paragraph");
    para.appendChild(textNode);
    article.appendChild(para);
  });

  let button = document.createElement("span");
  button.setAttribute("class", "expandButton");
  article.appendChild(button);


  // function elementCreator(nameForElement, typeOfElement, ...attributes){
  //   if(attributes == 0){

  //   }
  //   article.appendChild(nameForElement);
  // }

  let articles = document.querySelector(".articles");
  articles.appendChild(article);
}

createArticle(info);

let articles = document.querySelectorAll(".article");
articles.forEach(article => new Article(article));