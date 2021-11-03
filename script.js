/*
    Assignment 5
    Amandeep Kaur(0772966)
*/

$(document).ready(function () {
  // your code here
  let randomID = () => {
    let rand = Math.floor(Math.random() * 26) + Date.now();
    return rand;
  };

  class ContentCard {
    constructor(title, description, categoryType) {
      this.id = randomID();
      this.title = title;
      this.description = description;
      this.categoryType = categoryType;
    }

    updateContent(title, description, categoryType) {
      title ? (this.title = title) : null;
      description ? (this.description = description) : null;
      categoryType ? (this.categoryType = categoryType) : null;
    }

    toString() {
      let containerID = "container-".concat(this.id.toString());
      let container = $(document.createElement("div"));
      let titleElement = $("<h4>" + this.title + "</h4>");
      let descriptionElement = $("<p>" + this.description + "</p>");
      let categoryElement = $("<div>" + this.categoryType + "</div>");

      container.append(titleElement, descriptionElement, categoryElement);
      return container
        .css({ border: "1px solid black" })
        .attr("id", containerID);
    }
  }

  let contentCards = [
    {
      title: "Anna Karenina",
      description:
        "the eight-part towering work of fiction tells the story of two major characters: a tragic, disenchanted housewife, the titular Anna, who runs off with her young lover, and a lovestruck landowner named Konstantin Levin, who struggles in faith and philosophy. Tolstoy molds together thoughtful discussions on love, pain, and family in Russian society with a sizable cast of characters regarded for their realistic humanity. The novel was especially revolutionary in its treatment of women, depicting prejudices and social hardships of the time with vivid emotion.",
      categoryType: "drama",
    },
    {
      title: "To Kill a Mockingbird",
      description:
        "The novel examines racism in the American South through the innocent wide eyes of a clever young girl named Jean Louise (“Scout”) Finch. Its iconic characters, most notably the sympathetic and just lawyer and father Atticus Finch, served as role models and changed perspectives in the United States at a time when tensions regarding race were high. To Kill a Mockingbird earned the Pulitzer Prize for fiction in 1961 and was made into an Academy Award-winning film in 1962, giving the story and its characters further life and influence over the American social sphere.",
      categoryType: "classic",
    },
    {
      title: "The Great Gatsby",
      description:
        "The novel is told from the perspective of a young man named Nick Carraway who has recently moved to New York City and is befriended by his eccentric nouveau riche neighbor with mysterious origins, Jay Gatsby. The Great Gatsby provides an insider’s look into the Jazz Age of the 1920s in United States history while at the same time critiquing the idea of the “American Dream.” Perhaps the most-famous aspect of the novel is its cover art—a piercing face projected onto a dark blue night sky and lights from a cityscape—an image that is also found, in a slightly different configuration, within the text itself as a key symbol.",
      categoryType: "drama",
    },
    {
      title: "Invisible Man",
      description:
        "Invisible Man is a groundbreaking novel in the expression of identity for the African American male. The narrator of the novel, a man who is never named but believes he is “invisible” to others socially, tells the story of his move from the South to college and then to New York City. In each location he faces extreme adversity and discrimination, falling into and out of work, relationships, and questionable social movements in a wayward and ethereal mindset. The novel is renowned for its surreal and experimental style of writing that explores the symbolism surrounding African American identity and culture. Invisible Man won the U.S. National Book Award for Fiction in 1953.",
      categoryType: "fiction",
    },
    {
      title: "Don Quixote",
      description:
        "he novel, which is very regularly regarded as one of the best literary works of all time, tells the story of a man who takes the name “Don Quixote de la Mancha” and sets off in a fit of obsession over romantic novels about chivalry to revive the custom and become a hero himself. The character of Don Quixote has become an idol and somewhat of an archetypal character, influencing many major works of art, music, and literature since the novel’s publication. The text has been so influential that a word, quixotic, based on the Don Quixote character, was created to describe someone who is, “foolishly impractical especially in the pursuit of ideals; especially: marked by rash lofty romantic ideas or extravagantly chivalrous action.”",
      categoryType: "classic",
    },
  ];

  contentCards.forEach((contentCard) => {
    let content = new ContentCard(
      contentCard.title,
      contentCard.description,
      contentCard.categoryType
    );
    $("#content-list").append(content.toString());
  });
});
