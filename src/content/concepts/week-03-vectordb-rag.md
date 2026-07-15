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

Before he left, he handed Nimmi a checklist.

✓ Keep each chunk focused on one clothing item.

✓ Include meaningful attributes like weather, occasion, material, comfort, and style.

✓ Don't make chunks too large, or unrelated information gets mixed together.

✓ Add metadata such as season, destination type, and temperature range.

✓ Update the wardrobe whenever new clothes are added.


A week later Nimmi boarded her flight to Mumbai. For the first time she packed in minutes!

## Terminology

**Chunk**: A small, meaningful piece of information stored independently for retrieval.

**Token**: The smaller units (words or subwords) that AI models process internally.

**Embedding**: A numerical representation of meaning that places similar concepts close together in vector space.

**Vector Database**: A specialized database that stores embeddings and retrieves semantically similar items efficiently.

**Cosine Similarity**: A distance metric that measures how similar two embeddings are based on their direction rather than their size.

**Metadata**: Additional structured information (such as season, weather, occasion, or destination) attached to a chunk to improve retrieval.

**Retrieval-Augmented Generation (RAG)**: A technique where an AI system first retrieves the most relevant information from a knowledge base before generating its final response.

**Semantic Search**: Searching by meaning rather than exact keyword matching.

**Nearest Neighbor Search**: The process of finding the vectors that are closest to a query embedding in vector space.
