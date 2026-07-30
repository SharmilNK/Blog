---
title: "Vector DB & RAG"
track: "concepts"
week: 2
description: "Nimmi transforms her chaotic wardrobe into a Vector Database and discovers how Retrieval-Augmented Generation (RAG) always finds the perfect outfit."
tagline: "the wardrobe that remembers"
icon: "🧳"
characters: ["Nimmi", "Keeper of Memories"]
publishDate: 2026-01-12
draft: false
socialSnippet: "What if your wardrobe could retrieve the perfect outfit the same way AI retrieves knowledge? Learn Vector Databases and RAG through a travel story."
quiz:
  - tier: "basic"
    question: "What is a chunk in a Vector Database context?"
    options:
      - "A small, meaningful piece of information stored independently for retrieval"
      - "The entire collection of all documents combined into one large file"
      - "A single character in a document"
      - "A backup copy of the original document"
    answer: 0
  - tier: "intermediate"
    question: "Why does semantic search using embeddings outperform exact keyword matching?"
    options:
      - "It searches for keywords faster than BM25"
      - "It finds semantically similar content even when exact words don't match, capturing meaning rather than just word overlap"
      - "It requires less storage space than keyword indexing"
      - "It works only with English language documents"
    answer: 1
  - tier: "expert"
    question: "In a Retrieval-Augmented Generation (RAG) system, what is the primary purpose of grounding?"
    options:
      - "To make the vector database physically stable during storage"
      - "To ensure the LLM answers using retrieved documents as evidence instead of relying solely on its own memory"
      - "To compress embeddings for faster computation"
      - "To remove low-quality chunks from the retrieval results"
    answer: 1
---

# Vector DB & RAG

Nimmi loved to travel. Paris in spring, Tokyo during cherry blossom season, Swiss Alps in winter, the beaches of Bali had her passport full of stamps.
Her wardrobe was even fuller.Over the years she had collected everything- heavy wool coats, cotton shirts, silk dresses, rain jackets, trekking boots, hats from Morocco, Ponchos from Peru!
What had once been an organized wardrobe had become complete chaos.

One evening she received an invitation.
**Destination:** Mumbai  
**Month:** November

Excited to travel again, she rushed to open her wardrobe. Within seconds clothes were flying everywhere.
A thick winter coat?
"No."
A ski jacket?
"Definitely not."
A wool scarf?
"Why do I even own three of these?"

Forty-five minutes later, she was still searching. She sat on the floor surrounded by clothes."There has to be a better way."

The next morning she seeked the city librarian. He wasn't an ordinary librarian. People called him the **Keeper of Memories**.
He smiled after hearing her problem."You don't have a clothing problem. You have a retrieval problem. You need to re-organize your wardrobe by meaning."

The librarian picked up a notebook. "We begin by describing every piece of clothing."
Instead of treating the wardrobe as one giant collection they created one description for each item.

*Blue Linen Shirt*  
*Material: Linen*  
*Color: Sky Blue*  
*Occasion: Casual*  
*Weather: Warm*  
*Temperature: 24–32°C*  
*Humidity: High*  
*Destination: Tropical*  
*Style: Smart Casual*

Another.

*Black Wool Coat*  
*Material: Wool*  
*Weather: Cold*  
*Temperature: Below 8°C*  
*Occasion: Formal*  
*Style: Winter*

The librarian smiled, "Each description is called a **chunk**. We don't search wardrobes, we search meaningful pieces."

Nimmi looked puzzled, "How does the wardrobe read words?"
The librarian picked up one description. He carefully separated it into smaller pieces.

*Mumbai*  
*November*  
*Warm*  
*Humid*  
*Cotton*  
*Casual*  
*Walking*

"These tiny pieces are called **tokens**. The wardrobe understands tokens."

Nimmi watched as,
the blue linen shirt floated close to:
- Cotton Shirts
- Summer Dresses
- Light Jackets

The wool coat floated far away beside:
- Snow Boots
- Thermal Gloves
- Winter Hats

Nimmi looked amazed, "So similar clothes gather together."
"Exactly. That is called an **embedding**.Nearby clothes naturally stayed close together."Your wardrobe is now a **Vector Database**."

Nimmi pointed toward two floating shirts, "How does it know which one is closer?"

The librarian drew two glowing points.

      Mumbai Query
            ●
           /
          /
     ● Blue Linen Shirt

     ● Cotton Shirt

                         ● Wool Coat

                               ● Snow Boots
                               
"We simply measure the distance, the shorter the distance the more similar they are. We usually use **Cosine Similarity**."

The wardrobe didn't search for the exact words "Mumbai" or "November." Instead, it searched for their meaning.
*Warm weather*
*High humidity*
*Comfortable walking*
*Casual city travel*

Using Cosine Similarity, it retrieved the closest clothing chunks from the Vector Database and within moments, the wardrobe suggested:

*Blue Linen Shirt*
*Beige Chinos*
*White Sneakers*
*Lightweight Rain Jacket*
*Sunglasses*
*Cotton Overshirt*

The wool coat never appeared, because its meaning lived far away in the "Cold Winter" neighborhood of the Vector Database.

The Keeper smiled, "That is **Retrieval-Augmented Generation**, or RAG.
First, we retrieve the most relevant memories from the Vector Database, then, we use those retrieved pieces to generate the best answer."

Nimmi laughed, "So my wardrobe doesn't remember everything, it simply knows where to look."

A week later Nimmi boarded her flight to Mumbai. For the first time she packed in minutes!

## Terminology

**Document Indexing**: Preparing your documents so they can be searched efficiently. This usually involves parsing files, breaking them into chunks, adding useful metadata, removing duplicates, and storing them in a Vector Database.

**Chunk**: A small, meaningful piece of information stored independently for retrieval.
Techniques: Fixed-size chunking, LangChain's RecursiveCharacterTextSplitter, Semantic chunking, Parent-child chunking.

**Token**: The smaller units (words or subwords) that AI models process internally.

**Embedding**: A numerical representation of meaning that places similar concepts close together in vector space.
 
**Vector Database**: A specialized database that stores embeddings and retrieves semantically similar items efficiently.

**Cosine Similarity**: A distance metric that measures how similar two embeddings are based on their direction rather than their size.

**Metadata**: Additional structured information (such as season, weather, occasion, or destination) attached to a chunk to improve retrieval.

**Retrieval-Augmented Generation (RAG)**: A technique where an AI system first retrieves the most relevant information from a knowledge base before generating its final response.

**Semantic Search**: Searching by meaning rather than exact keyword matching.

**Nearest Neighbor Search**: The process of finding the vectors that are closest to a query embedding in vector space.

**Retrieval Pipeline**: The process of finding the most relevant chunks for a user's question. Common techniques include Dense Retrieval, Hybrid Search, Metadata Filtering, Query Expansion, and Reranking to improve search quality.

**Grounding**: Ensuring the LLM answers using the retrieved documents instead of relying only on its own memory. Supply the model with the relevant evidence/chunks and instruct it to base its answer on that evidence.
Techniques: Context Injection, Prompt Constraints, Citation Grounding, Reranking, Metadata Grounding, Context Compression, Knowledge Graph Grounding.

**Dense Retrieval**: Finding documents by comparing the semantic meaning of embeddings rather than matching exact keywords.

**BM25**: A traditional keyword-based search algorithm that ranks documents based on how well they match the search terms.

**Hybrid Search**: Combining keyword search (BM25) with semantic search (embeddings) to improve retrieval accuracy.

**Metadata Filtering**: Filtering documents using attributes like category, date, author, location, or tags before performing semantic search.

**Query Expansion**: Improving a user's search by automatically adding related words or phrases to retrieve more relevant documents.

**Reranking**: Reordering the retrieved documents so the most relevant ones appear at the top before they are sent to the LLM.

Suggested Reading :

[Retrieval Evaluation & the Utilization Score](https://www.orivale.com/evaluation/week-02-the-spy-masters-letters)

[Scaling RAG in Production](https://www.orivale.com/mlops/week-05-the-library-that-became-a-kingdom)
