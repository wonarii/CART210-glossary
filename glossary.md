# Glossary of keywords related to new media.

The following list of keywords related to new media is constantly updated by the CART210 community throughout the term.

Each student is responsible for choosing and maintaining a set of three keywords. You will research about, define, and exemplify these terms. Your task involves improving the concepts throughout the term. 

For each keyword, cite at least three references. Ensure that at least two of these are from academic sources, such as journal articles, books, or conference papers. Citations must follow the Chicago author-year format.

>[!IMPORTANT]
To make your contributions and suggest changes, follow the instructions in the repository's [README](https://github.com/concordia-dcart/CART210-glossary/blob/main/README.md) file.

---
## Affordance

Gibson coined the term “affordance” to describe what the environment “offers the individual, what it provides or furnishes, either for good or ill” 

Affordances can be viewed as animal-relative properties of the environment. They correspond to the action possibilities offered to an animal by the environment with reference to the individual’s action capabilities. For example, a leaf provides support for a wasp but not for a dog. Here, the support-ability of the leaf is an affordance for the wasp. 

Affordances can vary not only between species but also between the individuals of the same species. A 30-cm stair is climb-able for an adult but not for a child. In sum, affordances are neither objective nor subjective, but both. They are objective because they exist independently of the act of perception. But, they are also subjective because the frame of reference is the individual’s action capabilities. 

Gibson also assumed that affordance perception does not need information processing or internal representations. Rather, affordance perception is direct, corresponding to a learning process based on the extraction of invariants. An animal perceives walk-ability if it sees a flat, extended, rigid, horizontal surface, because this combination of invariants affords support.

Physical versus learned affordance

Norman was inspired by the dichotomy between the ventral system and the dorsal system and drew a close parallel between the functions of the dorsal system and affordances. Specifically, he stressed that some statements made by Gibson were somewhat equivocal. For example, Gibson wrote that the ‘values’ and ‘meanings’ of things in the environment can be directly perceived” or “postboxes afford letter mailing”. Norman proposed that only “physical affordances” are perceived by the dorsal system. So, in the aforementioned example of the postboxes, it would be better to say that slot in the mailbox affords inserting an object of appropriate size and shape.

By contrast, the ventral system is in charge to assign meanings to things, and particularly to provide information about the conventional uses of familiar tools (i.e., familiar tool use). In this case, Norman suggested the notion of “learned affordance”. The physical versus learned affordance dichotomy mirrors the novel versus familiar tool use opposition, respectively. In this view, both types of affordances can contribute to tool use, even though the ability to perform familiar tool use might be one of the properties of the ventral system. 
Importantly, this dichotomy also implies that the perception of physical affordances (dorsal system) guides not only body actions within a hand-centered frame of reference (e.g., reaching, grasping) but also novel tool use, namely, actions involving a toolcentered frame of reference. We see a contradiction in Norman’s argument as he also suggested that the transformation of visual information into a tool-centered framework (called allocentric by Norman) is the specific function of the ventral system (i.e., learned affordance).

By contrast, the dorsal system is responsible for the transformation of “visual information into an egocentric framework allowing the actor to grasp or otherwise bodily manipulate the object” 
Norman and Young (2006) have suggested that the perception of affordances – and more specifically of physical affordances for Norman – might be supported by the dorsal system. The same theoretical rapprochement may be envisaged between the dorsal system and the affordance route to action. Nevertheless, Yoon and Humphreys (2007) argued that such a rapprochement remains to be demonstrated, notably because of studies indicating that action decision tasks can activate the left inferior temporal lobe (i.e., the ventral system).[^neuro&behavior01affordance]

[^neuro&behavior01affordance]:Osiuraka, François, Yves Rossettic, and Arnaud Badet. June 1st 2017 _"What is an affordance? 40 years later."_ Neuroscience and Biobehavioral Reviews, volume 77 :pages 403-417. Accessed january 16th 2024.
https://www.sciencedirect.com/science/article/pii/S0149763416305061 


## Agency 

Agency is the “capacity, condition, or state of acting or of exerting power”. [^MerriamWeb24agency] One’s sense of self-agency - that is the sense that there is an “I” who is generating an action - largely depends on “the degree of discrepancy resulting from comparison between the predicted and actual sensory feedback”. [^Sato05agency] The concept is highly applicable to studies of [human-Computer Interaction](../main/glossary.md#computer-human_interaction).

Agency is felt by degrees: one can feel more or less in control. This variation is particularly clear when a [user](../main/glossary.md#user) interacts with a machine: the feeling of control varies between different operator inputs and expected machine response. 

Often, one may knowingly act with agency and receive the expected result of an act. However, these judgements of agency frequently do not follow actual control in situations where agency might be ambiguous.  [^Sato05agency]

![agency](images/agency-hoekstra-01.png)
Image made of a composition of [^Drexler16agency] [^Al24agency] [^tumblr24agency]

[^MerriamWeb24agency]: “Definition of AGENCY.” 2024. January 28, 2024. https://www.merriam-webster.com/dictionary/agency.

[^Sato05agency]: Sato, Atsushi, and Asako Yasuda. 2005. “Illusion of Sense of Self-Agency: Discrepancy between the Predicted and Actual Sensory Consequences of Actions Modulates the Sense of Self-Agency, but Not the Sense of Self-Ownership.” <i>Cognition</i> 94 (3): 241–55. https://doi.org/10.1016/j.cognition.2004.04.003.

[^Drexler16agency]: Drexler, Doug. “LCARS Interface - Star Trek Deep Space Nine - TV".  2016. ArtStation. April 8, 2016. https://www.artstation.com/artwork/EbP8n.

[^Al24agency]: Alrubaie, Dun. “Hand Reaching out to an Orange Sky · Free Stock Photo.” Accessed February 11, 2024. https://www.pexels.com/photo/hand-reaching-out-to-an-orange-sky-9740932/.

[^tumblr24agency]: thevaultofretroscifi. “Thevaultofretroscifi.” Tumblr. Tumblr (blog). Accessed February 11, 2024. https://thevaultofretroscifi.tumblr.com/post/138664053372.





## API
The Application Programming Interface (API) is responsible for transmitting data from one device to another by taking in a request and responding with the data requested.

### Advantage and Purpose of APIs

The advantage of using an API to communicate between the client and the server rather than sending a direct query to the databases is that it protects the database from potential security risks. It also allows developers to keep a similar syntax when requesting data from any type of database. [^dreanfactory2023understanding]
The purpose of an API is to provide the client, whether a mobile application, website or other software, the information to build their product.

Several APIs are available on the Internet with different sets of data pertinent for various purposes. For example, if making an application that gives information on the weather, an API for the weather would be used to gather the necessary information. The developer or client would send a request to the API server that would return a response including some data. Using APIs also helps construct flexible applications by allowing developers to add functionalities easily to an existing project.[^aws24what] Anyone can easily integrate APIs into their projects by searching for them online. However, they are mostly implemented by programmers since it is not meant to be used by the end-user.[^wiki24api]

### Types of APIs
There are several types of APIs available for developers depending on the needs of a project. Each type of API has its own architecture and data formats.
#### Representational State Transfer (REST or RESTful):
The architecture of the REST API relies on six constraints, a uniform interface, a client-server decoupling, statelessness, storing cache, a layered system architecture and code on demand.
This gives developers consistent data that are uniform and predictable, making it easier for them to understand and put the information requested to use. The data can be delivered in several kinds of formats such as JSON, HTML, SLT, Python, PHP and plain text.
This type of API is ideal for web and mobile applications as it allows flexibility in programming languages. It is also able to handle large numbers of users simultaneously.[^ibm24what]

#### Simple Object Access Protocol (SOAP):
SOAP API, in comparison to REST API, is more rigid in its structure and only returns data in an XML format. It is most used when building on outdated systems which already use the protocol. There are also advantages in using SOAP for its tighter security beneficial to internal applications. It is also a better option if the integrity of the data is important as it implements the Atomicity, Consistency, Isolation, and Durability (ACID) properties. It is more reliable at the cost of less flexibility.[^aws24soap]

#### GraphQL (Query Language):
GraphQL is a query language signifying that the developer can use queries to request specific data. The string is sent to the server for interpretation and responds to the request with a JSON. It was developed by Facebook[^meta15graphql] and is the most modern standard for APIs after REST. It allows developers to avoid over-fetching data and only collecting what they request.[^graphql24basics] The developer can specify the structure of the response it needs for certain tasks. Additionally, GraphQL can retrieve the required data with a single request which reduces redundant communication between the client and the server.

### APIs and Art
Some museums have incorporated new technologies in the recent decade to provide more accessibility. One of the way to acheive that was by openly sharing a  database of their art collection online accessible to anyone through thier API. For example, the Metropolitan Museum of Art introduced the Metropolitan Museum of Art Met Collection API with an Open Access policy, allowing the distribution of their collection for the public domain. The data also includes relevant information on the history, artist and other details along with the works.[siegel18APIs] This reflects the integration of APIs in the art world and its impact on how we consume art. 

[^wiki24api]: Wikipedia. 2024. "API". Accessed January 29, 2024. https://en.wikipedia.org/wiki/API
[^aws24what]: 2024. "What is an API (Application Programming Interface)?" AWS. Accessed January 29, 2024. https://aws.amazon.com/what-is/api/.
[^dreanfactory2023understanding]: Nguyen, Spencer. 2023. "Understanding the Connection Between Databases and APIs." Accessed January 25, 2024. https://blog.dreamfactory.com/understanding-the-connection-between-databases-and-apis/#:~:text=APIs%20facilitate%20communication%20between%20applications,layer%20of%20protection%20to%20databases.
[^ibm24what]: 2024. "What Is a Rest Api?" IBM. Accessed February 26, 2024. https://www.ibm.com/topics/rest-apis. 
[^aws24soap]: 2024 "What is the Difference Between SOAP and REST?" AWS. Accessed February 26, 2024. https://aws.amazon.com/compare/the-difference-between-soap-rest/. 
[^graphql24basics]: 2024. "GraphQL is better than REST." How to GraphQL. Accessed February 26, 2024. https://www.howtographql.com/basics/1-graphql-is-the-better-rest/. 
[^meta15graphql]: Byron, Lee. 2015. "GraphQL: A data query language." Engineering at Meta. Accessed February 26, 2024. https://engineering.fb.com/2015/09/14/core-infra/graphql-a-data-query-language/
[siegel18APIs]: Siegel, Camille. 2018. "APIs and the art world: Working together for digital collaboration." Axway. https://blog.axway.com/product-insights/amplify-platform/application-integration/apis-art-world.
## Asset

The definition of asset in a general context is rooted in the business and economics. In a paper on the definition of a brand asset, the term is defined as a symbol that helps identify goods or services that differentiates it from its competitors.[^tollington98asset]

An asset defined more in lined with traditional media assets, whether that be an audio asset or some form of visual imagery, relates more to the term new media. 

Beyond this general definition, an asset can be defined as the relationship between the computer and the asset.[^mateas05asset] Instead of merely being a playback of sorts, it is defined by the “ratio of computation to the size of the media.” Chris Crawford coins the term “crunch per bit” as the process intensity of the computation. 

Outside of a definition of bits, an asset can also be described as an “intangible asset” as it relates to new media arts.[^tsortanidou19asset] It can play a role in defining an aesthetic or the artistic process. 

[^tollington98asset]: Tollington, Tony. 1998. “Brands: The Asset Definition and Recognition Test.” Journal of Product &#38; Brand Management 7 (3): 180–92. https://doi.org/10.1108/10610429810222822.
[^mateas05asset]: Mateas, Michael. 2005. “Procedural Literacy: Educating the New Media Practitioner.” On the Horizon 13 (2): 101–11. https://doi.org/10.1108/10748120510608133.
[^tsortanidou19asset]: Tsortanidou, Xanthippi, Thanasis Daradoumis, and Elena Barberá. 2019. “Connecting Moments of Creativity, Computational Thinking, Collaboration and New Media Literacy Skills.” Information and Learning Sciences 120 (11–12): 704–22. https://doi.org/10.1108/ILS-05-2019-0042.

## Avatar

![avatar](images/avatar_Tadonki.png)[^avatarSourceList]

An avatar is a digital entity or body through which a human being can experience the events within a digital world, giving the user a “subject-position within a simulated environment, a vicarious body through which the player can act as an agent in a fictional world.”[^Castronova03avatar] 

The term takes its meaning from Hinduism, deriving from a Sanskrit word for “descent” and used to refer to the incarnations the Hindu god Vishnu on earth.[^Klevjer06avatar] This term has evolved to symbolize the body that we inhabit when visiting a virtual world, and that only exists there.[^Trepte/Reinecke10avatar]

The creation and use of avatars began mostly in entertainment media such as video games or virtual reality where they can be used by players to accomplish several gameplay related actions such as combat or communication.  But with the increasing popularity and accessibility of 3D art and 3D creation software, avatars have also found use in the creation of 3D artwork, from artistic screenshots to sceneries. The design of an avatar can be as grounded or fantastical as the user desires, ranging from human-like characters to fantastic beasts. Alongside this, the ever-increasing computing power and graphical capabilities of modern computers expand the options available in avatar creation, enabling users to create avatars with more and more sophisticated designs and details.
[^avatarSourceList]:All 3d models belong to their respective owners: ARC SYSTEM WORKS, NIS America, Team Reptile, Nintendo, Pupuya Games, Tango Gameworks, Valve, Antro (@antro3dcg), Rockstar, Edelweiss.

[^Castronova03avatar]:Castronova, Edward. 2003. “Theory of the Avatar.” CESifo Working Paper Series, no. 863. Munich: CESifo.

[^Klevjer06avatar]:Klevjer, Rune. “What is the avatar? Fiction and embodiment in avatar-based singleplayer computer games.” (2006).

[^Trepte/Reinecke10avatar]:Trepte S, and Reinecke L. “Avatar Creation and Video Game Enjoyment.” Journal of Media Psychology 22, no. 4 (2010): 171–84. https://doi.org/10.1027/1864-1105/a000022.

## Big Data
Big Data is the use of a large quantity of stored and analyzed information to form accurate understandings and predictions about the world. The wielding of this type of information processing has been accelerated by improvements in technology and the growing amounts of digital connections between people and organizations. [^AsktCite]

Big Data is used in everything from health care to political campaigns. Notably big data was a cornerstone of [Barack Obama’s presidential campaigns](http://www.jstor.org/stable/26466778) where personalized messaging and interaction were optimized by the assessment of potential voter preferences. [^LadonMurraycite] Large-scale data analysis was also used in the NBA to track player shooting accuracy. A sensor placed on the hoop would track and record the player’s shots from different points on the court. It would then be able to suggest where to shoot from to maximize winning potential. [^Ricecite] 
In both of these examples, real-world phenomena were tracked and enumerated. They were then sent through systems and by people who would find patterns that could predict outcomes. 

![Big Data](images/bigdata-marshel.jpg)[^nosebleed22]


[^LadonMurraycite]: Landon-Murray, Michael. 2016. “Big Data and Intelligence: Applications, Human Capital, and Education.” Journal of Strategic Security 9, no. 2: 92–121. doi:10.5038/1944-0472.9.2.1514

[^AsktCite]: Akst, George. 2019. “Sponsor’s Corner: What Is a Data Scientist, Anyway?” Phalanx 52, no. 1 (2019): 58–60. https://www.jstor.org/stable/26627999.

[^Ricecite]: Rice, Mae. 2023.“25 Data Science Applications and Examples.” Built In, February 9, 2023. https://builtin.com/data-science/data-science-applications-examples. 

[^nosebleed22]: Freepik. 2022. “Nosebleed Vectors, Photos and PSD Files: Free Download.” Accessed February 11, 2024. https://www.freepik.com/search?format=search&last_filter=query&last_value=nosebleed&query=nosebleed&type=photo

## Blockchain

A blockchain is a shared and public ledger that stores data and is used to record transactions accross multiple computers. This database has a continuously growing list of information/records called blocks which are linked through cryptography. Every block stores a hash, history of the previous block, transactional data, date and time.[^berg18blockchain]

Blockchains are secure and maintain a decentralized record of transactions which is the reason they are used for (although not limited to) cryptocurrencies. There is no way to change a block therefore making it very safe and removes the need of third parties for transfers.[^kulhari18blockchain]

For example, blockchains are used in the monetary world for crypto currencies such as Bitcoin and Ethereum since it ensures transparency between transactions and protects the financial identity of individuals when they use crypto to buy or sell anything.[^segura23blockchain]

![Blockchain](images/blockchain.jpg)

[^berg18blockchain]: Berg, Willem van den. 2018 “Blockchain for Fragile States: The Good, the Bad and the Ugly.” Clingendael Institute.

[^kulhari18blockchain]: Kulhari, Shraddha. 2018. “Data Protection, Privacy and Identity: A Complex Triad.” In *Building-Blocks of a Data Protection Revolution: The Uneasy Case for Blockchain Technology to Secure Privacy and Identity*, 1st ed., 23–37. Nomos Verlagsgesellschaft mbH. 

[^segura23blockchain]: Abad Segura, Emilio. 2023. “Blockchain and Cryptocurrencies in Accounting.” In *Holistic Approach to New Technologies for Secure Accounting Management*, 57–68. Dykinson, S.L.









## Blog

Blogs are similar to personal journals that are shared on the internet through a website of choice. They are updated often and are aimed for public consumption. 
Blogs tend to follow a specific format where posts are arranged in reverse chronological order. They also allow for easy interaction with others online, people 
can share their ideas and comments instantly for others to engage back.[^andrews07blog]

Blogs represent many things for many different users. It can a way to present introspective thinking, a record of daily events, a tool for political mobilization, 
a journalistic project, an open-ended literary experiment, a constant exhibition of images and/or videos, or often enough, is a different combination of things listed 
above. An early study of blogs summarize them as providing a large variety of expression within the restrictions of the simplicity of the format.[^siles11blog]

Blogs usually tend to have a header, sidebar and footer as well as the main content area. A header can include navigation or menu items, and the sidebar could include 
favourites, masterlists and more. A footer can also be included depending on what kind of blog, and it tends to show contact information.[^greatcontent22blog] However, this does not mean blogs 
are limited to follow this format, it is just commonly follows it. Blogs allow for a lot of customization, this included the format, as well as the aesthetics. 

Blogs are convenient because they allow anyone to curate a space for pretty much anything. It makes it easy for people to share their own content and thoughts, you can easily 
start posting your own writing or art no matter how niche it is.

[^andrews07blog]: Andrews, Michael. “What Is a Blog?” Essay. In Business Law Today 16, 3rd ed., 16:51–51. American Bar Association, 2007. https://www.jstor.org/stable/23296739.

[^siles11blog]: Siles, Ignacio. “From Online Filter to Web Format: Articulating Materiality and Meaning in the Early History of Blogs.” Essay. In Social Studies of Science 41, 5th ed., 41:737–58. Sage Publications, 2011. https://www.jstor.org/stable/41301958. 

[^greatcontent22blog]: GreatContent. “What Is Blogging & How to Start It?” GreatContent, November 8, 2022. https://greatcontent.com/pillar/what-is-blogging/. 

## Brain Interfaces

![Brain Interfaces](images/brain-interface-on_line.png)[^Angelsimon]

Brain Interfaces, also commonly called Brain-computer interfaces (BCIs) enables users to send messages or commands directly via brain activity, without movement. It is a communication system in which messages or commands of an individual sending it to the external world do not pass through the brain’s normal output pathways of peripheral nerves and muscles.[^GugerChris]

Brain-compiter interfaces raise and confront on level of philosophical and cultural questions to be asked. Initially, known in the realm of science fiction and popular movies, such as The Matrix(1999), the audiences has been confronted ot this idea of being connected via the brain/spine "plugged" to a virtual reality world or memory upload.[^CaldwellEverett]

In the view of Hayles, she engages with the facts that the body can be integrated with technology or without technology, but stands with the complexity of the material world: "If my nightmare is a culture inhabited by posthumans who regard their bodies as fashion accessories rather than the ground of being, my dream is a version of the posthuman that embraces the possibilities of information technologies without being seduced by fantasies of unlimited power and disembodied immortality, that recognizes and celebrates finitude as a condition of human being, and that understands human life is embedded in a material world of great complexity, one on which we depend for our continued survival."[^Hayles]

[^Angelsimon]: Simon, Angel. "Textura de un cerebro fresco de cordero". Education License - Adobe Stock. Assessed February 12, 2024. https://stock.adobe.com/ca/Library/urn:aaid:sc:VA6C2:82f1f676-07ac-428f-92d4-006bfcf3333e?asset_id=123121549.

[^GugerChris]: Guger, Christoph, Allison, Brendan Z., and Aysegul Gunduz. 2021. "Brain-Computer Interface Research: A State-of-the-Art". Brain-Computer Interface Research, SpringerBriefs in Electrical and Computer Engineering.

[^CaldwellEverett]: Everett, Anna, Caldwell, John T. 2003. "New Media: Theories and Practices of Digitextuality". Routelegde.

[^Hayles]: Hayles, Katherine. 1999. "How We Became Posthuman: Virtual Bodies in Cybernetics, Literature, and Informatics." University of Chicago Press.

## CMYK

CMYK is a color model used in printing. It is an abbreviation of **C**yan, **M**agenta, **Y**ellow, and **K**ey (black, which refers to printing plates being keyed or aligned to the black printing plates) which provides a more reliable reproduction of images that RGB cannot provide. It is also used quite a bit thanks to its incredible accuracy that it can hold. While it is not the most accurate with darker tones (leading it to become lighter in rare cases) it still holds up to be the most accurate.

While it has many uses, the most used ways are in medicine and printing processes. 

For medical use, it is used as an analysis tool as you can adapt the CMYK models for use to find certain stains in the cells. For example, in a study conducted to attempt to be able to find IHC (immunohistochemistry) stains, researchers edited the CMYK model to be able to read better the IHC as well as being able to tell STAT3 levels easier thanks to the better Yellow channel.

For printing, as it’s most common usage. It is used side by side with Pantone as they are the two printing styles that offer the most accurate version of the original image/as the creator intends. As screens normally use RGB, most software defaults with RGB which makes it so that printers normally turn the image into CMYK for easier printing.

[^pham07cmyk]: Pham, Nhu-An, Andrew Morrison, Joerg Schwock, Sarit Aviel-Ronen, Vladimir Iakovlev, Ming-Sound Tsao, James Ho, and David W Hedley. “Quantitative Image Analysis of Immunohistochemical Stains Using a CMYK Color Model.” Diagnostic Pathology, February 27, 2007. https://diagnosticpathology.biomedcentral.com/articles/10.1186/1746-1596-2-8. 

[^liu19cmyk]: Liu, Qiang, Zheng Huang, Michael R. Pointer, and M. Ronnier Luo. “Optimizing the Spectral Characterisation of a CMYK Printer with Embedded CMY Printer Modelling.” MDPI, December 5, 2019. https://www.mdpi.com/2076-3417/9/24/5308. 

[^plumgrove07cmyk]: “What Is CMYK Color?” Plum Grove, January 21, 2022. https://plumgroveinc.com/what-is-cmyk-color/. 



## Codec

A "codec," which stands for "coder-decoder" or "compressor-decompressor," is a type of technology primarily used in digital media for encoding and decoding audio and video streams. The primary purpose of a codec is to compress large multimedia files to reduce their size for more efficient storage and faster transmission over networks, which is particularly vital in applications like webcasting, video conferencing, and online streaming.

Codecs work by compressing (coding) a media file when it is saved or transmitted and then decompressing (decoding) it for playback or editing. This process involves removing redundant or unnecessary data, and in some cases, data that is less perceivable to human senses, such as inaudible sounds in audio (as seen in MP3 codecs). The level of compression can vary, with some codecs prioritizing higher compression rates to save on bandwidth and storage, while others focus on retaining higher quality with less compression.

Different codecs are optimized for specific types of data. For instance, some are tailored for human speech, making them ideal for voice calls or audio books, while others are designed for high-fidelity music or complex video sequences[^kerdranvat20codec]. The effectiveness of a codec is a balance between the processing power required for compression and decompression, and the level of compression achieved. More efficient codecs that achieve higher compression rates typically require more processing power, which can be a consideration for devices with limited computational resources.

The development and evolution of codecs have played a pivotal role in shaping the handling of multimedia on the Internet[^chen18codec]. For example, the introduction of the MP3 format revolutionized the music industry by allowing for the easy digital distribution of music, albeit raising significant copyright issues. Similarly, advancements in video codecs, such as AV1, HEVC, and AVC, have significantly impacted online video streaming, providing high-quality video at lower bandwidths.

In the realm of visual arts, the artistic exploration of codecs is exemplified by German artist Thomas Ruff's JPEGs series. Starting in 2002, Ruff used digital photographs taken by himself and from the web, compressed using the maximum rate, and then decompressed into large-scale prints. This method of hypercompression and enlargement highlights the mathematical infrastructure of the JPEG image, exposing the pixel blocks into which the image is split during the compression process. Ruff's work turns a digital artifact (pixelation) into a default aesthetic, reflecting how JPEG has become the modern default mode of viewing images online and on-screen. This illustrates a shift from geometric projection to algorithmic processing in image creation, emphasizing that 'photographic' now denotes a specific mode of image processing, with the mathematical matrix used during compression as the new 'architectural order' of the image[^hoelzl13codec].

The ongoing innovation in codec technology, including the development of both proprietary and open-source variants, continues to be integral to enhancing multimedia experiences on the Internet. This is especially evident in the increasing demand for codecs that can provide high video compression efficiency in the face of rising video data traffic, balancing the need for quality, bandwidth availability, and processing capability.

[^kerdranvat20codec]: Kerdranvat, Michel, Ya Chen and Rémi Jullian. 2020. "The Video Codec Lanscape in 2020." 

[^chen18codec]: Chen, Yue, Debargha Murherjee and Jingning Han. 2018. "An Overview of Core Coding Tools in the AV1 Video Codec."

[^hoelzl13codec]: Hoelzl, Ingrid and Remi Marie. 2013. "CODEC: on Thomas Ruff's JPEGs."






//need to delete, info now under human-computer_interaction.md

## Copyright

Copyright is a right that allows people to copy or recreate a work, ranging from artistic creations to a computer program. A person who owns the copyright of a certain work owns all the rights to it. It is used to protect it's creators from having their work copied, sold or posted online without their permission. Creators can extend the copyright to another person if they choose to do so.[^govcan23copyright] The laws of copyright vary from country to country, with some laws being stricter than others.

The first copyright law passed in America was in 1790 in the United States, which initially protectected books, maps and charts. In the 1800s, other mediums were added such as published music, dramatic works and works of art. Motion pictures were added as early as 1912 and computer programs joined the list in the late 80s. With the arrival of VHS tapes, the laws were updated to prevent private recordings from being sold.[^davidson00copyright]

Copyright can expire after a certain amount of years. The time it takes for it to expire may vary on the country. It would then fall into the public domain, where it becomes available to be used, distributed or reworked freely.[^dulongmartin12copyright]

![copyright-covaliu](../images/copyright-covaliu.png) [^pexelscopyright][^khromkrathokcopyright][^purePNGcopyright][^wikipedia2012copyright]

[^govcan23copyright]: Government of Canada. "A guide to copyright." Government of Canada. Last modified January 10, 2023. https://ised-isde.canada.ca/site/canadian-intellectual-property-office/en/guide-copyright.
[^davidson00copyright]: Davidson, Mary Wallace. 2000. "Copyright." *Notes 56*, no. 3 (March): 598-604. doi: https://www.jstor.org/stable/899643
[^dulongmartin12copyright]: Dulong de Rosenay, Melanie, and Juan Carlos De Martin. 2012. *The Public Domain Manifesto*. 1st ed. Open Book Publishers. https://www.jstor.org/stable/j.ctt5vjsx3.6
[^pexelscopyright]: Pexels. "Free Stock Photo of Old Wall." Freerange. https://freerangestock.com/photos/128596/old-wall--background-.html
[^khromkrathokcopyright]: Khromkrathok, Natthaphong. "collection of wooden shelves on an isolated white background." Vecteezy. https://www.vecteezy.com/png/10135574-collection-of-wooden-shelves-on-an-isolated-white-background-objects-with-clipping-paths-for-design-work
[^purePNGcopyright]: PurePNG. "Glass Jar." Pinterest. https://www.pinterest.com/pin/1120903794727045021/
[^wikipedia2012copyright]: Wikipedia Commons. "Copyright.svg." Wikipedia. September 21, 2012. https://commons.m.wikimedia.org/wiki/File:Copyright.svg

## Creative Commons

In an easy way to understand, Creative Commons is basically a fancy law regarding copyright. Essentially, why Creative Commons are so particular is because they are a more globally known copyright law which easier to use and more common. In simple terms, when an author uses Creative Commons on his work he's allowing users/readers to reuse their work on another.[^Harington20creativecommons] Moreover, the praticality of Creative Commons is also really important to know. In fact, when Creative Commons are used appropriately users don't have any financial, legal or politcal constraints. Basically, a worry-free enviornment for using people's content. [^Margoni16creativecommons]

With the concept now explained it's important to also know the format/protocols authors need to follow to apply Creative Commons licenses. To use these licenses there are four conditions that have to be met. These conditions can be mixed into six different licenses. To grasp this idea I recommend watching the following Youtube video. [^CreativeCommons17creativecommons] The last thing to remember from this is that at the end of the day the Creative Commons licenses come in three formats which are machine-readable, lawyer-readable and human-readable. 



[^Harington20creativecommons]: Harington, Robert. 2020. "Copyright, Creative Commons, and Consufion." The Scholarly Kitchen, https://scholarlykitchen.sspnet.org/2020/04/20/copyright-creative-commons-and-confusion/.
[^Margoni16creativecommons]: Margoni, Thomas., and Peters, D.M., 2016. “Creative Commons Licenses: Empowering Open 
Access,” Social Science Research Network, https://doi.org/10.2139/ssrn.2746044.![image](https://github.com/concordia-dcart/CART210-glossary/assets/70153178/c7fba4af-67d4-40cb-bfa4-763a57a7dd27)
[^CreativeCommons17creativecommons]:Creative Commons. 2017. “Breaking down the CC Licenses - Creative Commons,” https://creativecommons.org/get-cc-savvy/breaking-cc-licenses/.![image](https://github.com/concordia-dcart/CART210-glossary/assets/70153178/2a5b03b9-e25b-45de-8f10-a53b0ea5d29f)



## Cryptocurrency
Cryptocurrency is a type of digital or virtual currency that uses cryptography for security. Unlike traditional currencies used by governments and centralized banks, the main idea is that cryptocurrencies attempt to operate on decentralized networks founded on blockchain technology. Cryptocurrencies rely on secure distributed ledger data structures; where mining is an integral part of Proof-of-Work systems. Mining requires the use of computer power to solve complex mathematical problems (encrypted transaction keys), validate transactions, and add them to the blockchain. A successful miner is rewarded with newly created cryptocurrency as an incentive.[^watorek21cryptocurrency] Other systems also exist such as Proof-of-Stake or PoS for short.[^mukhopadhyay16cryptocurrency] PoS relies on participants holding a certain amount of cryptocurrency to validate transactions and create new blocks, eliminating the need for intensive computational work. Cryptocurrency can typically be bought on trading exchanges such as Binance or Coinbase, but can also be bought and sold via peer-to-peer methods.[^wu21cryptocurrency] Digital currencies can also be stored on software-wallets and hardware-wallets. In most cases, the singular term cryptocurrency can mean a token. Some notable cryptocurrencies are Bitcoin, Ethereum, and Cardano. Any cryptocurrency that is not Bitcoin, is considered as an Altcoin. As the cryptocurrency landscape evolves, new projects, cryptocurrencies, altcoins, systems, and use cases are being implemented.

[^mukhopadhyay16cryptocurrency]: Mukhopadhyay, Ujan, Anthony Skjellum, Oluwakemi Hambolu, Jon Oakley, Lu Yu, and Richard Brooks. "A brief survey of cryptocurrency systems." In 2016 14th annual conference on privacy, security and trust (PST), pp. 745-752. IEEE, 2016.

[^watorek21cryptocurrency]: Watorek, M., Drożdż, S., Kwapień, J., Minati, L., Oświęcimka, P., & Stanuszek, M. (2021). Multiscale characteristics of the emerging global cryptocurrency market. Physics Reports, 901, 1-82.

[^wu21cryptocurrency]: Wu, Jiajing, Jieli Liu, Yijing Zhao, and Zibin Zheng. "Analysis of cryptocurrency transactions from a network perspective: An overview." Journal of Network and Computer Applications 190 (2021): 103139.

## CSS (Cascading Style Sheet)
### Definition


(under construction + placeholder for my sources)
- [^meyer01css]
- [^robbins02css]

### Examples


#### Collage demonstrating the importance of CSS in webpages
![NYT website is not feeling well](images/css-polonsky.png)

[^meyer01css]:Meyer, Eric A. 2006. "CSS: The Definitive Guide: The Definitive Guide." O'Reilly Media, Inc.
[^robbins02css]:Robbins, Jennifer Niederst. 2012. "Learning web design: A beginner's guide to HTML, CSS, JavaScript, and web graphics." O'Reilly Media, Inc.



## Cultural Determinism

Cultural determinism is a conceptual theory stating that the culture in which we are raised determines the basis for our emotions, behaviors, values, and politics. It suggests that cultural and social influence dominate even biological behavior (i.e., firmly on the "nuture" side of the [nature vs nuture debate](https://www.psychologytoday.com/us/basics/nature-vs-nurture)). Breaking the theory down into two concepts, culture is the sum of socially shared attitudes, customs, and beliefs that distinguishes one group of people from another; while determinism is a philosophical position whereby an event has conditions that could not be caused by any other means.  [^feenberg10CD] Cultural determinism is oppositionally related to [technological determinism](../main/glossary.md#technological_determinism), which states that technology determines our culture/society. The concept of cultural determinism first began to gain traction with cultural antropologists in the 1930s, in pushback to concepts of biological determinism and eugenics. [^dutton2018] 

Cultural determinism may not be all determinant, however. Often, people feel pressured to follow cultural norms without understanding or recognizing the reasons or pressure for following those norms. As long as the culture’s coercion remains unconscious, there are few opportunities to act outside of those norms. But it’s not entirely unusual for a person to become aware of their cultural coercion, and act in a different way. [^ketner71CD] There is some debate that this resistance to cultural expectations is also a culture-bound decision. According to Dutton, "it has been argued that cultural determinism is philosophically problematic because, if cultural differences are caused by different histories and history is a group's culture in a set period, we have a circular argument that reifies history". [^dutton2018]

[^dutton2018]: Dutton, Edward C. 2018. “Determinism, Cultural.” *The International Encyclopedia of Anthropology*, 1–4. John Wiley & Sons, Ltd. https://doi.org/10.1002/9781118924396.wbiea1293.

[^feenberg10CD]: Feenberg, Andrew and Anne-Marie Feenberg. 2010. “An Internet of Everything? Technological and Cultural Determinism". <i>Wikibooks, Open Books for an Open World</i>. Accessed January 29, 2024. https://en.wikibooks.org/wiki/An_Internet_of_Everything%3F/Technological_and_Cultural_Determinism.

[^ketner71CD]: Ketner, Kenneth L. 1971. “Concerning Cultural Determinism.” <i>The Journal of American Folklore</i> 84 (334): 444–46. https://doi.org/10.2307/539639.


## Cyberspace

Cyberspace’s current definition according to the CSRC (Computer Security Resource Center) is “The complex environment resulting from the interaction of people, software and services on the Internet by means of technology devices and networks connected to it, which does not exist in any physical form.” [^bussel23wiki]

The term, cyberspace, has always meant a virtual “place” accessed through the internet by machines. When it first appeared in Omni Magazine in 1982, in a short story written by the Canadian-American author William Gibson, it was referred to as a computer network filled with artificial beings. In the same year, the movie Tron was released, depicting a completely digital world. This popularized the idea that computers shared a digital location in which one could interact with digital beings.[^csrc24wiki]

In the 1990s, due to the pop culture popularization of the term, the definition morphed into “The ‘location’ in which people interacted with each other while using the Internet.” It became the “space” where one played online games or interacted on forums and blogs. [^dclark10wiki]

[^bussel23wiki]: Bussell, J., 2023. "cyberspace.", Encyclopedia Britannica. https://www.britannica.com/topic/cyberspace.

[^csrc24wiki]: Editor, CSRC Content. “Cyberspace - Glossary | CSRC.” Accessed January 29, 2024. https://csrc.nist.gov/glossary/term/cyberspace.

[^dclark10wiki]: David Clark, 2010, Characterizing cyberspace: past, present, and future, Accessed January 29, 2024

## Data Science
Data Mining is when data scientists use big data to find patterns that are novel and/or useful for businesses or individuals who want to learn more in-depth information about data collected. For instance, a data scientist could look at a real estate database containing leases and permits and find out patterns that could predict purchasing patterns for  companies [^Sipes].
Data mining can be particularly useful because you don’t necessarily need to know the question you are asking in order to find answers. Using a top-down approach, data scientists are able to find patterns and create analysis of said patterns without a particular question in mind. This way companies can find ways to identify novel, useful, or understandable correlations and patterns in data sets
without having a particular question in mind. Companies can find answers like correlative purchases (like how men buying diapers often buy beer as well [^Chung]) or new patterns (who will repay a loan). 

[^Slobogin]


[^Chung]: Chung, H. Michael, and Paul Gray. “Special Section: Data Mining.” Journal of Management Information Systems 16, no. 1 (1999): 11–16. 

[^Sipes]: Sipes, James L. 2016.“MINING FOR DATA.” Landscape Architecture 96, no. 10 (2006): 126–32. 

[^Slobogin]: Slobogin, Christopher. 2008. “Government Data Mining and the Fourth Amendment.” The University of Chicago Law Review 75, no. 1 (2008): 317–41. 

## Deep fakes

•	synthetic media
•	vary in their form and creation ( text, image, audio, video)
•	automatically synthesized by a machine-learning system.
•	Can manipulate reality

“ for as long as we have been recording the sights and sounds around us, we have been manipulating them”(farid hany)
We are bombarded with manipulated imagery from the humorous to the absurdly unrealistic body images in fashion magazines and Instagram, weaponized in the form of non-consensual pornography, political attack ads, scientific fraud, misrepresentations in the media, and disinformation campaigns design to sow civil unrest and disrupt democratic elections
he most recent development in digital tampering , in the form of automated AI-powered media synthesis and manipulation aka deep fakes
leveraging modern tools in machine learning, computer graphics and computer vision has lowered the skill and time barriers for manipulating content.
While the ability to alter and change and delete content media is not new, the true power of deep fakes is the widespread access to sophisticated technology that previously was only in the hands of Hollywood-style studios and state-sponsored actors, along with the instantaneous and global distribution channels afforded by social media. [^hany01deepfakes]

[^hany01deepfakes]: 
Farid, Hany. September 20th 2020, “creating, using, misusing, and detecting deep fakes”, Journal of Online trust & safety, volume 1, no.4. Accessed February 12th 2024.
https://www.tsjournal.org/index.php/jots/article/view/56 



# Digitization:

Digitization is a process or a creation of a physical object that becomes photographed, processed into the computer using descriptive coding and then fully becomes a digital media that can be viewed across any search engine.[^mallison23digitization] Digitization entails any physical object or in-person sound that was scanned or recorded and uploaded to a computer to then be showcased within the digital realm. By digitizing data and services, it allows things like energy transformation, mobility and logistic sectors, and enhanced health care to be possible.[^kagermann15digitization] 

An example of digitization is taking a photo with a camera of something and then uploading it onto the computer to edit it, just by uploading it or scanning it, within the computer the image is being hardcoded to now be a digital image able to be manipulated unlike the actual object itself. Another example can be written text as well as typewritten text when written on the computer turns the process digital. The process of converting music from a VHS tape and making it into an LP or video is also a form of digitization. Digitization ultimately becomes the idea that all the analog elements as well as physical elements that are then hardcoded into a computer using ones and zeros are now a digitized version of them.[^bloomberg18digitization]

[^bloomberg18digitization]: Bloomberg, Jason. *Digitization, Digitalization, And Digital Transformation: Confuse Them At Your Peril*. Monique Babin. https://moniquebabin.com/wp-content/uploads/articulate_uploads/Going-Digital4/story_content/external_files/Digitization%20Digitalization%20and%20Digital%20Transformation%20Confusion.pdf.


[^kagermann15digitization]: Kagermann, Henning. 2015. “Change Through Digitization—Value Creation in the Age of Industry 4.0.” *Springer Link*, (December): 23-45, https://link.springer.com/chapter/10.1007/978-3-658-05014-6_2#citeas

[^mallison23digitization]: Mallison, Theodore, “Digitization,” Georgetown University. Last modified November 29, 2023. https://guides.library.georgetown.edu/c.php?g=1347959&p=9946942

## DNS
The Domain Name System is a system that matches the name in the URL to the IP address of the sites we are looking for on the Internet. This makes it easier for us to navigate to our favorite websites rather than remembering their IP addresses.[^couldflare24what] The DNS provides the corresponding IP address to the domain name for browsers to find the page we are searching for.
In short, the DNS allows a more user-friendly interface for users to navigate the Internet through human-readable host names.[^acm01dns]

![DNS](images/dns-chan.jpg)

### Domain Namespace
#### Search Structure
The DNS is a database that contains information on namespaces and provides the browser with the appropriate information from internet hosts to allow the navigator to reach the right places. It uses the domain namespace, a collection of all the domain names existing on the internet, to perform the search. This system is built on an inverted tree diagram where the initial point splits into several segments that also divide into more subsegments. As the search reaches lower into the tree, the more specific the namespace becomes. The nodes at the root of the tree are referred to as top-level domain names (TLD).[^google06dnsbind]

<img src="https://www.oreilly.com/api/v2/epubs/0596005628/files/httpatomoreillycomsourceoreillyimages137590.png" width="600px" height="auto" alt="Diagram of the struture of the doamin namespace">


#### Seven Top-Level Domain Names (TLD) That Divide The Internet
To host a website on the Internet, we are required to buy a root domain which includes the domain name and the TLD. The combination creates a website address such as _google.com_. Originally, there were seven top-level domain names that reflected the nature of the organization behind the website. 
- **.com** : Commercial use.
- **.edu** : Educational organizations.
- **.gov** : Government websites.
- **.mil** : Military websites.
- **.net** : For NSFNET and UUNET, and commercial use after 1996.
- **.org** : Noncommercial organizations (before 1996).
- **.int** : International organizations.

Today, other domains were added with the expansion of the Internet, allowing for a larger pool of available namespaces.[^google06dnsbind] Big companies like Apple, Google, Audible, Amazon, Best Buy, and more own TLDs that are reserved strictly for their use and inaccessible to the public.

### DNS and New Media
The obvious relation between the DNS and new media is through everything that needs to connect to the Internet.
Therefore, all new media platforms in the form of websites, applications and other online formats require IP addresses and a corresponding domain name. Without the DNS, it would be much harder to navigate the Web and access new media content.

#### TLDs and New Media Art
The DNS allows artists to choose namespaces that correspond to their work and specializations. This creates room for artists to express themselves by using the DNS and namespaces as a way to establish a unique name reflecting their brand.

Several examples of top-level domains available for artists, designers and creators to buy include:
[^wiki24list]
- **.actor**
- **.art**
- **.design**
- **.digital**
- **.graphics**
- **.media**
- **.studio**
- **.tech**
- etc.


[^couldflare24what]: CloudFlare. 2024. "What is DNS? | How DNS works." Accessed January 25, 2024. https://www.cloudflare.com/learning/dns/what-is-dns/.
[^acm01dns]: Jung, Jaeyeon, Sit, Emil, Balakrishnan, Hari and Morris, Robert. 2001. "DNS Performance and the Effectiveness of Caching: Proceedings of the 1st ACM SIGCOMM Workshop on Internet Measurement." ACM Conferences. Accessed February 26, 2024. https://dl.acm.org/doi/epdf/10.1145/505202.505223.
[^google06dnsbind]: Liu, Cricket, and Albitz, Paul. 2006. "How Does DNS Work?" DNS and Bind, 11-34. Google Books. Accessed February 26, 2024. https://books.google.ca/books?hl=en&lr=&id=u0GbAgAAQBAJ&oi=fnd&pg=PT4&dq=DNS&ots=6-v2uEt-Oy&sig=wV_8GvQVJJORsEiKSgDny91vV3A#v=onepage&q&f=false. 
[^wiki24list]: 2024. "List of Internet Top-Level Domains." Wikipedia. Accessed February 26, 2024. https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains. 
## E-commerce
E-commerce, short for electronic commerce, refers to buying and selling goods and services on the internet. It is part of a bigger industry called e-business which includes all the processes that are needed to run an online company.[^Bloomental23ecommerce] Consumers can buy almost everything at any time of the day through ecommerce.[^Forbes23ecommerce]

The history of e-commerce dates back to even before the creation of the Internet. It started with the electronic system called EDI in the 1960s, which allowed document transfers. The first online transaction happened in 1994 when a CD was sold through an online market called NetMarket. Since then, the industry has grown and given rise to today’s popular platforms such as Amazon, eBay, Shopify, etc.[^Bloomental23ecommerce]

E-commerce is related to new media as it has been significantly influenced by the rise of new media, particularly social media. Platforms like Facebook, Instagram, and Twitter have emerged as new marketplaces for businesses, facilitating them to broaden their reach and establish a more personal connection with their customers.[^Dwivedi23ecommerce] This fusion of media and commerce, often termed “social commerce,” has redefined the traditional business model and unlocked new possibilities for businesses.[^HuangYu16ecommerce]

Moreover, E-commerce has also transformed marketing strategies. The rise of seamless shopping experiences has pushed marketers to use methods and content types that make the customer’s path to purchase smoother.[^HuangYu16ecommerce] This includes strategies like using video ads on sites like YouTube, working with influencers, and new trends like shopping in a virtual reality setting and live online shopping events.[^HuangYu16ecommerce]

[^Bloomental23ecommerce]: Bloomenthal, Andrew. 2023. “E-commerce Defined: Types, History, and Examples.” Investopedia. https://www.investopedia.com/terms/e/ecommerce.asp.
[^Forbes23ecommerce]: Jolaoso, Christina. 2023. “What Is E-Commerce?.” Forbes Advisor. https://www.forbes.com/advisor/business/what-is-ecommerce/.
[^Dwivedi23ecommerce]: Dwivedi, Yogesh K., Elvira Ismagilova, Nripendra P. Rana, and Ramakrishnan Raman. 2023. “Social Media Adoption, Usage And Impact In Business-To-Business (B2B) Context: A State-Of-The-Art Literature Review.” Information Systems Frontiers 25 (3): 971–93. https://doi.org/10.1007/s10796-021-10106-y.
[^HuangYu16ecommerce]: Huang, Zhao, and Wang Yang Yu. 2016. “Bringing E-Commerce to Social Networks.” In HCI in Business, Government, and Organizations: eCommerce and Innovation, edited by Fiona Fui-Hoon Nah and Chuan-Hoo Tan, 46–60. Cham: Springer International Publishing. https://doi.org/10.1007/978-3-319-39396-4_5.


## Embodiment 
![Embodiment](images/embodiment-rezaee.png)
As an overall term, embodiment can carry several meanings. Embody in dictionary... Latin root of embody... Its most common use deals with physical representations of subjects both real and abstract. For example, "She is the embodiment of anger!", this concrete defintion is simple enough to understand. However depending on context the definition of the term shifts. 

In computation and media, embodiment is a discourse that can be deeply philosophical and has a rich history. Within the body's interactions itself, there are many forms of abstraction to be dealt with. Many people have heard of the comparison of brains to computer. The early 4EA (Embodied, Embedded, Extended, Enacted, Affective) cognitive science movement questioned the notion of computation related to an organism. These thinkers arrived to the conclusion that... Today, there remains three schools of thought to consider: body conservationism, body functionalism and body enactivism. The latter of which states that cognition arises from the dynamic interaction between an organism, its body, and its environment [^kiverstein05wiki].

The social aspect of media deepens this discourse, our presence online... Our online embodiments, uch as avatars are an emphatical form of embodiment. and personas [^kleyjer01wiki].  

Other things to consider are human interaction with the computer [^chen02wiki], 

immersion [^dyson03wiki], 

cyborgs [^haddow04wiki] and more.

[^chen02wiki]:Chen, Jessie YC, and Gino Fragomeni. 2018. Virtual, Augmented and Mixed Reality: Interaction, Navigation, Visualization, Embodiment, and Simulation: 10th International Conference, VAMR 2018, Held as Part of HCI International 2018, Las Vegas, NV, USA, July 15-20, 2018, Proceedings, Part I. Vol. 10909. Springer.
[^dyson03wiki]:Dyson, Frances. 2009. Sounding New Media: Immersion and Embodiment in the Arts and Culture. Univ of California press.
[^haddow04wiki]:Haddow, Gill. 2021. “Embodiment and Everyday Cyborgs: Technologies That Alter Subjectivity.”
[^kiverstein05wiki]:Kiverstein, Julian. 2012. “The Meaning of Embodiment.” Topics in Cognitive Science 4 (4): 740–58.
[^kleyjer01wiki]:Klevjer, Rune. 2006. “What Is the Avatar? Fiction and Embodiment in Avatar-Based Singleplayer Computer Games.”
N.d.

## Ethernet 

Ethernet is a wired network technology that connects computers to other devices using cables and protocols. It was invented in the early 1970s by Xerox and became a standard in 1983.
It has different types and speeds depending on the cable and device used. The most common types are twisted pair, coaxial, and fiber optic cables. The most common speeds are 10 Mbps, 100 Mbps, 1 Gbps, and 10 Gbps. [^BasuMallick23ethernet]

Ethernet usually offers faster internet connection than Wi-Fi because of its use of cables rather than radio waves which can be less stable and secure.[^BusinessInsider24ethernet]


[^BasuMallick23ethernet]: BasuMallick, Chiradeep. 2023. “What Is Ethernet? Definition, Types, and Uses.” Spiceworks. Accessed January 25. https://www.spiceworks.com/tech/networking/articles/what-is-ethernet/.
[^BusinessInsider24ethernet]: Business Insider. 2024. “What Is Ethernet? the Wired Network Connection, Explained.” Business Insider. Accessed January 25. https://www.businessinsider.com/guides/tech/what-is-ethernet.

## Facial Recognition

Facial recognition is a recognition system that utilizes biometrics to detect, analyze, and recognize faces.[^kaur20facial] The process can be broken down into three technologies: detection, analysis, and recognition. Detection infers the training of an algorithm to recognize faces; The detected faces are then mapped and converted into a “faceprint”.[^klosowski20facial] Finally, and most notably, faceprints are compared to individuals in a database to find their closest match.[^klosowski20facial] Face recognition is, defined by the IEEE, is an umbrella term capturing all "related technologies for building a face recognition system," including "face detection, face position, identity recognition, image preprocessing, etc"[^li20facial]. 

This software can be traced back to the 1960s. A system developed by Woodrow Wilson Bledsoe in which an "unknown face is compared against data points of previously entered pictures".[^klosowski20facial] As computers became more powerful, they began utilizing neural networks in the recognition process, resulting in the development of databases of faces. Such algorithms were predominantly trained on white males, thus leading to a higher rate of misidentification amongst BIPOC and female faces.[^klosowski20facial] Furthermore, facial recognition - notably its increasing use by governments - has given rise to security concerns, including the archiving of biometric information and images to build their databases.[^klosowski20facial]. Despite these worries, facial recognition has trickled into our day-to-day lives: face ID has become a vital and normalized feature of our mobile devices. Hence, this recognition technology and its increasing presence in our systems contributes to the growth of surveillance capitalism.


[^kaur20facial]: Kaur, Paramjit, Kewal Krishan, Suresh K Sharma, and Tanuj Kanchan. 2020. “Facial-Recognition Algorithms: A Literature Review.” Medicine, Science and the Law 60 (2): 131–39. https://doi.org/10.1177/0025802419893168.

[^klosowski20facial]: Klosowski, Thorin. “Facial Recognition Is Everywhere. Here’s What We Can Do about It.” The New York Times, July 15, 2020. https://www.nytimes.com/wirecutter/blog/how-facial-recognition-works/. 

[^li20facial]: Li, Lixiang, Xiaohui Mu, Siying Li, and Haipeng Peng. “A Review of Face Recognition Technology.” IEEE Access 8 (2020): 139110–20. https://doi.org/10.1109/access.2020.3011028. 

## Fan/Fandom

A Fan is a person that devotes themselves with genuine enthusiasm to something or someone. Whether it be an activity, a person, a product, a group, a company, etc… They can range from people who simply deeply enjoy something to someone who dedicates themselves to something they enjoy to the point of positively advertising it to people who are unaware of it and/or creating content around it.

Originating from the latin term fanaticus, meaning insane, mad, or possessed by gods [^Barton14Fan/Fandom] and the term “fanatic” used to describe extremely devout religious followers, the term was shortened to “fan”, which allowed it to abandon such a religious connotation and the usual intensity that accompanies the term, and then made its way into common English language.

Fans and Fandoms are very known for expressively displaying their love for the material, person, or organization that they are fans of. Fanfiction, which can be described as stories written by fans of mass-produced media [^De_Kosnik16Fan/Fandom], is one of the prime methods fans use to show their affection for storytelling media for example. Fans will analyze the source material, re-structure, re-imagine a written story that they enjoyed and discuss it with others. Fans and fandoms are usually positive minded. But people can also form a community around things they hate. The term anti-fandom/anti-fans describes this as “distant readers who form an image of a text or a genre without actually paying attention to it, and who then viscerally define their identity against the disliked object.”[^Duffett13Fan/Fandom]
[^Barton14Fan/Fandom]:Barton, Kristin Michael, and Jonathan Malcolm Lampley, eds. 2014. Fan Culture : Essays on Participatory Fandom in the 21st Century. Jefferson, North Carolina: McFarland &#38; Company, Inc.

[^De_Kosnik16Fan/Fandom]:De Kosnik, Abigail. 2016. Rogue Archives : Digital Cultural Memory and Media Fandom. Cambridge, Massachusetts: MIT Press. 

[^Duffett13Fan/Fandom]:Duffett, Mark. 2013. Understanding Fandom : An Introduction to the Study of Media Fan Culture. New York: Bloomsbury.

## Firewall

![Firewall](images/firewall-tran.jpg)

A firewall is like a security gate that controls what comes in and out. It is a network security device that monitors the incoming and outgoing network traffic and decides whether to allow or block them based on a set of defined security rules. 
There are different types of firewalls, such as proxy, stateful inspection, UTM, next-generation, cloud-native firewalls and more, each with different features and functions. [^Cisco24firewall]

A firewall has many benefits, such as blocking spyware, stopping virus attacks, promoting privacy, and network traffic, and preventing hackers from accessing the network. [^Spiceworks24firewall]

[^Cisco24firewall]:“What Is a Firewall?” n.d. Cisco. Accessed January 29, 2024. https://www.cisco.com/c/en/us/products/security/firewalls/what-is-a-firewall.html.
[^Spiceworks24firewall]: “What Is a Firewall? Definition, Key Components, and Best Practices.” n.d. Spiceworks (blog). Accessed January 29, 2024. https://www.spiceworks.com/it-security/network-security/articles/what-is-firewall-definition-key-components-best-practices/.

## Futurism

Futurism was an artistic and social movement that started in Italy at the beginning of the 20th century. The movement was started by Filippo Tommaso Marinetti, publishing a manifesto in the French journal, Le Figaro.[^coenmunsgrove03futurism] During that time, new technologies were being developed at a rapid pace. Futurists rejected the past and believed in a future where technology ruled. Futurist ideas were expressed through painting, sculpture and even fashion, favoring less conventional elements to separate themselves from traditional methods used in these mediums, often putting an emphasis on dynamism and speed in their art.[^coenmunsgrove03futurism] Destruction was believed to bring change to their country in order to make it stronger and more developed.[^casden15futurism]

However, this movement was not without controversy. Because futurists had an industrialized view of the future, they deemed museums and libraries as unnecessary and advocated for their destruction. They also deemed feminism as unnecessary.[^casden15futurism][^luisettisomigli09futurism] Another reason for this is due to Italy not being as industrially developed during this time as the other powerful countries. Italy was often associated with classical art movements such as the Renaissance, making technological advancements seem more necessary than ever.[^casden15futurism] Futurism also had heavy ties to Fascism, with members siding with Mussolini after the First World War.[^luisettisomigli09futurism]

[^casden15futurism]: Casden, Emily. 2015. “Italian Futurism: An Introduction.” Khan Academy. https://www.khanacademy.org/humanities/art-1010/xdc974a79:italian-art-before-world-war-i/art-great-war/a/italian-futurism-an-introduction 

[^coenmunsgrove03futurism]: Coen, Ester, and John Musgrove. 2003. “Futurism.” Oxford art online. DOI: https://doi-org.lib-ezproxy.concordia.ca/10.1093/gao/9781884446054.article.T030277 

[^luisettisomigli09futurism]: Luisetti, Federico, and Luca Somigli. “A Century of Futurism: Introduction.” Annali d’Italianistica 27, (2009): 13-21. JSTOR, https://www.jstor.org/stable/24016244

## GAN

Generative adversarial networks (GANs) enable the learning of deep representations without the need 
for significant training data annotation[^wang10GAN]. They do this by generating backpropagation signals via a 
rival approach involving two networks meshing together[^Creswell10GAN]. Generative adversarial networks (GANs) 
are a form of artificial intelligence that can create new instances based on patterns discovered in data. They 
excel in creating realistic, high-quality photographs[^goodfellow10GAN]. Essentially, GANs recognize the likelihood of various 
attributes happening in a dataset and utilize that information to generate new, comparable instances[^goodfellow10GAN]. This makes 
them more successful than other approaches that produce pictures using deep learning, a form of sophisticated machine 
learning methodology[^goodfellow10GAN].

[^wang10GAN]: Wang, K., C. Gou, Y. Duan, Y. Lin, X. Zheng, and F. -Y. Wang. 
"Generative adversarial networks: Introduction and outlook." IEEE/CAA Journal of Automatica Sinica 4, 
no. 4 (2017): 588-598. doi: 10.1109/JAS.2017.7510583.

[^Creswell10GAN]: Creswell, A., T. White, V. Dumoulin, K. Arulkumaran, B. Sengupta, and A. A. Bharath. "Generative Adversarial 
Networks: An Overview." IEEE Signal Processing Magazine 35, no. 1 (January 2018): 53-65. doi: 10.1109/MSP.2017.2765202.

[^goodfellow10GAN]: Goodfellow, I. J., Pouget-Abadie, J., Mirza, M., Xu, B., Warde-Farley, D., Ozair, S., Courville, A., & Bengio, Y. (2020).
Generative adversarial networks. Communications of the ACM, 63(11), 139–144. https://doi.org/10.1145/3422622

## Git

Git is a free, [open source](#opensource.md), and dedicated [version control](#version_control.md) and source code management software. It was created in 2005, when a group of volunteers working on the Linux Kernel had to quickly find a new version control system after a conflict happened with their previous source control management providers, BitKeeper. No longer being able to use this system without paying to use it, and with other free-to-use solutions not being able to fit their development needs, they instead created their own system.[^Geeksforgeeks-Git]

One of its main features is its ability to create branches[^Git-Git]; Different versions of the same code that are independant from each other, but still lets you copy the changes made in another branch into your own if needed. Another important feature is the staging state before a commit is fully completed, which allows you to select which changes will be included in a specific commit.

Examples of repository hosting platforms that use Git include:[^Opensource-Git]
- [GitHub](#github.md)
- GitLab
- Bitbucket
- SourceForge

[^Geeksforgeeks-Git]: GeeksForGeeks. 2021. "History of Git." GeeksForGeeks. [https://www.geeksforgeeks.org/history-of-git/](https://www.geeksforgeeks.org/history-of-git/)

[^Git-Git]: Git. "About." Git. Accessed March 1, 2024. [https://git-scm.com/about](https://git-scm.com/about)

[^Opensource-Git]: Opensource. 2018. "6 places to host your git repository." Opensource. [https://opensource.com/article/18/8/github-alternatives](https://opensource.com/article/18/8/github-alternatives)


## GitHub
GitHub is a web-based platform for version control and collaboration using Git,[^github24wikis] allowing users to manage and share code in various repositories and offering wikis for documentation and collaborative editing. GitHub employs Git software, offering distributed version control, access control, bug tracking, feature requests, task management, continuous integration, and project [wikis](../main/glossary.md#wiki).[^kinsta24what]

As of 2020, GitHub is the most important platform for collaborative Free/Libre Open Source Software (FLOSS) development, with 31 million user accounts and over 100 million code repositories.[^zoller20topology] FLOSS development is associated with the idea of commons-based peer production, presenting it as a different approach to creating goods and services compared to traditional market or hierarchical methods. It is seen as a method for producing without the usual power imbalances.

GitHub's development process is distributed, allowing developers to collaborate, discuss, and comment on code from various locations. This platform generates a wealth of textual, numerical, and collaborative data, making it a prime source for software engineering research.[^seker20open]

[^seker20open]: Seker, Abdulkadir, Banu Diri, Halil Arslan, and Mehmet Fatih Amasyalı. 2020. “Open Source Software Development Challenges: A Systematic Literature Review on GitHub.” International Journal of Open Source Software and Processes (IJOSSP) 11, no. 4: 1-26. 

[^zoller20topology]: Zöller, Nikolas, Jonathan H. Morgan, and Tobias Schröder. 2020. “A Topology of Groups: What GitHub Can Tell Us about Online Collaboration.” Technological Forecasting and Social Change 161: 120291​.

[^github24wikis]: GitHub Docs. 2024. “About wikis.” Accessed January 2. https://docs.github.com/en/communities/documenting-your-project-with-wikis/about-wikis.

[^kinsta24what]: Kinsta. 2024. ”What Is GitHub? A Beginner's Introduction to GitHub.” Accessed January 2. https://kinsta.com/knowledgebase/what-is-github/.


## GUI (Graphical User Interface)


## Haptics

The word “haptics” means ‘concerned with the sense of touch’ [^haptics1]. It is believed to have come from the Greek word “hapthesthai” [^haptics1]. In psychology and medicine, haptics refers to the study of how humans process sensory touch input through the body’s touch receptors [^haptics1]. In the late twentieth century, the definition had to be broadened because emergent technologies such as robots, video game consoles and virtual reality are all capable of creating touch sensations [^haptics2]. Thus, in the context of new media, haptics is defined as physical sensations—such as pushes or vibrations—that a user experiences while using an electronic device [^haptics3].

[^haptics1]: Hannaford, Blake, and Allison M. Okamura. 2016. “Haptics.” In Springer Handbook of Robotics, edited by Bruno Siciliano and Oussama Khatib, 1063–84. Springer Handbooks. Cham: Springer International Publishing. https://doi.org/10.1007/978-3-319-32552-1_42.
[^haptics2]: Srinivasan, Mandayam A. n.d. "What is Haptics?" Accessed January 29, 2024. https://www.merriam-webster.com/dictionary/haptics 
[^haptics3]: “Definition of HAPTICS.” n.d. Accessed January 29, 2024. https://www.merriam-webster.com/dictionary/haptics.

![Haptics](images/haptics-bocarro.png)

## Hash Functions

A hash function, used within code, is meant to turn numerical or string instances, or "keys", into usable buckets of data, known as "hashes". When you hash a message, it takes your file or message of any size, runs it through a mathematical algorithm, and spits out an output of a fixed length. 
Usually implemented to fulfill a form of a hash table, it operates three various functions within itself:
- It converts the keys into fixed lengths using ADD or XOR
- It rearranges the bits to uniformly disturbute them over the keyspace
- Generate a hash that is equal to or less than the network's target hash [^Frankenfield23whatishash]



In laymans terms, it stores each value into a book of sorts, storing it then in a bookshelf for easy keeping, by assigning the often times complex wording scheme into a simple letter, less than or equal to the amount of space the bookshelf has.

Used in other languages such  as C#, PHP, Java, and Python, it is often times implemented by default for a variety of those listed above, and can be overridden to suit the users needs for that specific program or project.

As well, it is used in certain types of modern cryptography, mostly within banks for making sure no fraudulance can happen within. Based on the Security by Obscurity Approach, the whole cryptosystem is communicating securely while maintaining a high level of privacy. [^Ahmed22hashfunctionapplications] Even though hash functions have many applications in modern cryptography, they
are perhaps best known for the important role they play in the practical use of digital signatures. [^Paar70hashfunction]

[^Frankenfield23whatishash]:Frankenfield, Jake. “What Is a Hash? Hash Functions and Cryptocurrency Mining.” Investopedia, Investopedia, 28 May 2023, www.investopedia.com/terms/h/hash.asp. 
[^Paar70hashfunction]:Paar, Christof, and Jan Pelzl. “Hash Functions.” SpringerLink, Springer Berlin Heidelberg, 1 Jan. 1970, link.springer.com/chapter/10.1007/978-3-642-04101-3_11. 
[^Ahmed22hashfunctionapplications]:Ahmed, Haifaa. “A review of hash function types and their applications.” Wasit Journal of Computer and Mathematics Science, vol. 1, no. 3, 30 Sept. 2022, pp. 75–88, https://doi.org/10.31185/wjcm.52. 

## Hashtag

A hashtag, denoted by the symbol “#”, is a metadata tag commonly use in the Internet culture, particularly on social media.[^Merriam-Webester24Hashtag]  It originated as a feature on a post on Twitterin August 2007 from a product designer named Chris Messina. The primary purpose was to provide user with an easy way to categorize, discover and participate in specific topics on social media.[^Hastags.org12Whatis#] In addition, Tweets containing hashtags can link to a specific timeline of other tweets with the same hashtag.[^WikströmHashtagOnTwitter] 

Hashtags are related to new media as it has significantly impacted the overall performance of social media content which can help small businesses, influencers, brands and many more to reach a bigger audience. A hashtag can contain multiple word without space, such as `#dogLover` and may also contain numbers. They can be added to social media posts, bios, comments, and other content. They are utilized across various platform, including Instagram, TikTok, YouTube, Facebook, Twitter and many more.[^SproutSocial23HashtagsWhatAreThey] 

By paying attention and researching trends, you can create a powerful tool to engage your audience and increase your social impact at no cost using hashtag. As it can create a community where answers and question can be freely exchange.[^OBrienDigitalMarketingInstitute] 

In addition, hashtags can be useful in assisting people in need. During the COVID-19 pandemic, Instagram hashtags helped young people at risk of poverty and social exclusion by fostering scientific education and promoting remote learning.[^PublicHealth22Instagram]

![Hashtag](../images/hashtag-tham.png)

[^Merriam-Webester24Hashtag]: Merriam-Webster. 2024. “Hashtag.” https://www.merriam-webster.com/dictionary/hashtag. 

[^Hastags.org12Whatis#]: Hastags. 2012. “What is a (#) Hashtag?.” hashtags.org. https://www.hashtags.org/how-to/history/what-is-a-hashtag/.

[^SproutSocial23HashtagsWhatAreThey]: Sprout Social. 2023. “Hashtags: What they are and how to use them effectively.” https://sproutsocial.com/insights/what-is-hashtagging/.

[^WikströmHashtagOnTwitter]: Wikström, Peter. 2014. "#srynotfunny: Communicative Functions of Hashtags on Twitter": 1–44. SKY Journal of Linguistics, Vol. 27, p.127-152. https://www.linguistics.fi/julkaisut/SKY2014/Wikstrom.pdf.

[^PublicHealth22Instagram]: Int J Environ Res Public Health. 2022. "An Instagram Hashtag Fostering Science Education of Vulnerable Groups during the Pandemic." https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8872541/.

[^OBrienDigitalMarketingInstitute]: O’Brien, Clodagh. 2023. “How to Use Hashtags Effectively on Social Media.” Digital Marketing Institute. https://digitalmarketinginstitute.com/blog/how-to-use-hashtags-in-social-media#:~:text=A%20hashtag%20is%20a%20word,your%20posts%20and%20encourage%20interaction.

# Hologram:

A hologram is created using a laser to project a three-dimensional photograph. How a laser can turn a photograph three-dimensional is done by having the object that will be made three-dimensional needs one laser beam to shine through the whole object first. Then another laser beam is projected onto the reflection of the first laser beam, and the point of intersection is then filmed. The film must then be developed and only afterwards, a third laser beam must pass through the film which finally projects a three-dimensional hologram onto a surface. The great thing about holograms from regular films and photographs is that they can be manipulated however possible and yet the original image or film will always be there. This is because all the information from the film or image is stored within the hologram from the object it is reflected from.[^talbot06hologram] Holograms are significantly different from what we know as digitized forms of reality. Holograms are just created through light diffractions which means that it has all the same information stored within it as the original object. Unlike anything that is turned into a digitized format, a lot of information is lost in translation and thus while the product may look as crisp as the original, it will always be a little less real. Holograms are just presented in another format using the light that shines off of an object, thus it can be seen with the naked eye and is merely the original object seen in an alternate way with the help of laser beams.[^elmahaln.d.hologram]

An example of a hologram can be seen in our daily lives in education when holograms are used to teach students if a teacher cannot be present, they can project themselves in front of the class in order for the lesson to continue. Particularly in medicine, another example of hologram usage is when students and even doctors themselves use them to learn more about human anatomy or specific organs on a three-dimensional hologram of the body. They can also learn about medical data and health conditions of different individuals by seeing many different holograms of different bodies reacting differently. Having these three-dimensional settings allows for more physical interaction with these objects, making engagement and immersiveness two of the key factors that allow students to learn better which holograms can help with.[^walker13hologram]

[^elmahaln.d.hologram]: Elmahal, Doaa, Asma Ahmad, Alaa Alomaier, Reem Abdlfatah, and Dina Hussein. n.d. “Comparative Study between Hologram Technology and Augmented Reality.” *Journal of Information Technology Management* 12 (2): 90–106. Accessed March 1, 2024. https://doi.org/10.22059/jitm.2020.75794.

[^walker13hologram]: Walker, Robin A. 2013. “Holograms as Teaching Agents.” *Journal of Physics: Conference Series* 415: 25–29. Accessed March 1, 2024. https://doi.org/10.1088/1742-6596/415/1/012076.

[^talbot06hologram]: Talbot, Michael. 2006. “The Holographic Universe Does Objective Reality Exist?” Accessed March 1, 2024. https://www.stealthskater.com/Documents/Holography_03.pdf.


## Collage on the Keyword Hologram

![Hologram](images/hologram-désormeaux.png)

Image on the top left[^bobby19hologram]

Image on the top right[^hackl20hologram]

Image in the middle[^wikiepedia16hologram]

Image on the bottom corner[^rosenthal21hologram]


[^bobby19hologram]: Bobby. *Star Wars Hologram Tech is here Now !! Epic Cool Things !! Voxon Photonics*. Image. Epic Heroes. November 2, 2019. https://www.epicheroes.com/star-wars-hologram-tech-buy-now-epic-cool-voxon-photonics/.

[^hackl20hologram]: Hackl, Cathy. *From Gaming To Holograms, How Tech Is Helping Candidates Campaign In The Metaverse*. Image. Forbes. November 2, 2020. https://www.forbes.com/sites/cathyhackl/2020/11/02/from-gaming-to-holograms-how-tech-is-helping-candidates-campaign-in-the-metaverse/?sh=5461f7c64055.

[^wikiepedia16hologram]: Wikiepedia. *Holograms & Holographic Projectors*. Image. Wikie Pedia. April 4, 2016. https://wikiepedia.wordpress.com/2016/04/04/holograms-holographic-projectors/.

[^rosenthal21hologram]: Rosenthal, Lynn. *Could Holograms Be the Future of Entertainment and Advertising?*. Image. RollingStone. December 14, 2021. https://www.rollingstone.com/culture-council/articles/holograms-future-entertainment-advertising-1268769/.

## HTTPS

HTTPS is an extension of the HTTP but is more secure as it incorporates encryption, authentication, and integrity checks. It provides a secure method for transmitting data between a web server and a web browser by using encryption technology like SSL or TLS. It operates on a request-response model, it sends a request and awaits the server’s response.[^WhatIsHTTPS24]
HTTPS safeguards users against any malicious activities such as eavesdroppers and man-in-the-middle attacks. It is relatively easy to impersonate, modify or monitor an HTTP connection since any information is sent as a plain text. Therefore, using HTTPS is more secure and ensure that no attacks can temper with the exchanged information.[^HypertextTransferProtocolSecure22]

### HTTPS Cryptographic protocols

#### Secure Sockets Layer (SSL)
SSL is the predecessor to the modern encryption, TLS. It was developed by Netscape in 1995[^CloudflareWhatIsSSL24] for ensuring the identity and authentication of a website, enabling a secure HTTP session between the client and the server. However, since SSL 3.0,  developed in 1996, several vulnerabilities have been identified, rendering it unsafe for use. Consequently, most browsers no longer support this protocol.

#### Transport Layer Security (TLS)
TLS is the successor of SSL and ensures privacy, authenticity and data security while exchanging data over the internet. The key difference between SSL and TLS lies in the handshake process, where a browser authenticates a server’s SSL or TLS certificate. SSL handshake involves an explicit connection and has more steps, while TLS is an implicit one, making it faster.[^AWSDifferenceBetweenSSL]

The term SSL and SSL/TLS both refer to the TLS protocol and certificates, as all version of SSL are now deprecated.

HTTPS contributes to a better overall user experience by providing faster loading times, especially on modern web browsers and prioritize secure connections. Additionally, search engines prioritize websites that use HTTPS in their search results.[^LinkedInHTTPSSEO24] It plays an important role in facilitating secure communication and interaction across various platform, including social media, streaming service and many more website. It does integrate an safety wall for the users navigating the web.

[^WhatIsHTTPS24]: Pol, Tushar. 2024. “What is HTTPS?.” Semrush Blog. https://www.semrush.com/blog/what-is-https/.

[^HypertextTransferProtocolSecure22]: Awati, Rahul. 2022. “Hypertext Transfer Protocol Secure (HTTPS).” TechTarget. https://www.techtarget.com/searchsoftwarequality/definition/HTTPS.

[^CloudflareWhatIsSSL24]: Cloudflare. 2024. “What is SSL | SSL definition.” https://www.cloudflare.com/learning/ssl/what-is-ssl/.

[^AWSDifferenceBetweenSSL&TLS24]: AWS. 2024. “What’s the Difference Between SSL and TLS?.” https://aws.amazon.com/compare/the-difference-between-ssl-and-tls/#:~:text=SSL%20is%20technology%20your%20applications,that%20fixes%20existing%20SSL%20vulnerabilities.

[^LinkedInHTTPSSEO24]: AI and the LinkedIn community. 2024. "Why does HTTPS matter for SEO?." LinkedIn. https://www.linkedin.com/advice/0/why-https-important-seo-skills-search-engines-ixwyc#:~:text=HTTPS%20is%20crucial%20for%20SEO,in%20search%20engine%20results%20pages.

## Human-Computer Interaction 

Human-Computer Interaction (HCI) delves into the intricacies of how individuals engage with computers, with a primary focus on user interfaces and ensuring the friendliness of digital technologies. This interdisciplinary field brings together elements from computer science, psychology, design, and sociology to create technology that is effective and accessible.

Key facets of HCI encompass:

1. User-Centered Design (UCD): The design process revolves around understanding users' needs, preferences, and behaviors. User-centered design entails iterations of prototyping and testing, ensuring the final product aligns with users' expectations and needs. A user-centered and friendly interface enables individuals to accomplish tasks with ease and minimal errors, enhancing the overall user experience.

3. Interaction Models: HCI explores a number of expansive interaction models, including graphical user interfaces (GUIs), touchscreens, voice recognition, gesture-based interfaces, and augmented reality. The goal is to identify the optimal way/s for users to interact with the technology.

4. Cognitive Aspects: Understanding human cognition, perception, and memory is absolutely essential in HCI. Designers strive to create interfaces that harmonize with users' mental models, reducing cognitive load and ensuring intuitive and human interactions.

5. Accessibility: HCI actively addresses the accessibility of digital systems for users with diverse abilities and disabilities. This encompasses considerations for visual, auditory, motor, and cognitive impairments, fostering inclusivity— necessary system changes with increasing importance in today's world.

6. Social and Cultural Factors: HCI recognizes the influence of social and cultural factors on user interactions. Designers take into account cultural norms, societal expectations, and user diversity, tailoring interfaces to resonate with a broad audience.

The overarching objective of HCI is to craft systems that are not merely functional but also user-friendly, intuitive, and gratifying for those engaging with them. It adopts a comprehensive approach to refining the interaction dynamics between humans and computers.

[^caroll97human-computer_interaction]: Carroll, John M. 1997. “HUMAN-COMPUTER INTERACTION: Psychology as a Science of Design.” Annual Review of Psychology 48 (1): 61–83. https://doi.org/10.1146/annurev.psych.48.1.61.

[^helander14human-computer_interaction]: Helander, M. G. 2014. Handbook of Human-Computer Interaction. Elsevier.

[^mackenzie24human-computer_interaction]: MacKenzie, I. Scott. 2024. Human-Computer Interaction: An Empirical Research Perspective. Elsevier.

[^myers98human-computer_interaction]: Myers, Brad A. 1998. “A Brief History of Human-Computer Interaction Technology.” Interactions 5 (2): 44–54. https://doi.org/10.1145/274430.274436.

![computer-human_interaction](images/human-computer_interaction_-_catt_.png)

Bibliography for images in collage: 

[^edlow23human-computer_interaction]: Edlow, Brian L., et al. “7 Tesla MRI of the Ex Vivo Human Brain at 100 Micron Resolution.” Scientific Data, vol. 6, no. 1, 30 Oct. 2019, p. 244, www.nature.com/articles/s41597-019-0254-8, https://doi.org/10.1038/s41597-019-0254-8. Accessed 10 Feb. 2024.

[^drawpaintacademy23human-computer_interaction]: “Hand Reference Photos.” 2023. Draw Paint Academy. February 2, 2023. https://drawpaintacademy.com/gallery/hand-reference-photos/.

[^wikipediacontributors19human-computer_interaction]: Wikipedia Contributors. “Human Eye.” Wikipedia, Wikimedia Foundation, 23 Apr. 2019, en.wikipedia.org/wiki/Human_eye. Accessed 10 Feb. 2024.

## Hypertext

Ted Nelson first introduces the term in his 1965 paper “A File Structure for the Complex, the changing and the indeterminate”, describing it as “a body of written or pictorial material interconnected in such a complex way that it could not conveniently be presented or represented on paper”.[^TedNelson1965]

Hypertext is a digital form of writing text, exploiting the use of hyperlinks. Commonly found in webpages, documents or files, hyperlinks are clickable & link to other webpages/texts/media on the internet (commonly known as “links”). [The Oxford Advanced Learner’s Dictionary](https://www.oxfordlearnersdictionaries.com/) defines hypertext as “text stored in a computer system that contains links that allow the user to move from one piece of text or document to another”.[^OxfordHypertext]

Hypertext allows people to easily access information from multiple sources and navigate through and between multiple documents from different sources on the web. As a form of information management, hypertext allows for a non-linear, and less restrictive exploration of digital content & information.[^JSMERP16] 

[^TedNelson1965]: Nelson, Theodor H. 1965. “Complex Information Processing: A File Structure for the Complex, the Changing, and the Indeterminate.” In *ACM’65 Proceedings of the 1965 20th National Conference*, 84-100.
[^OxfordHypertext]: Oxford University Press. Oxford Advanced Learner’s Dictionary. “Hypertext”. Accessed January 28, 2024. https://www.oxfordlearnersdictionaries.com/definition/english/hypertext
[^JSMERP16]: Koskinen, Jussi, Airi Salminen, and Jukka Paakki. 2004. “Hypertext Support for the Information Needs of Software Maintainers.” *Journal of Software Maintenance and Evolution: Research and Practice* 16 (3): 187–215. https://doi.org/10.1002/smr.292.

## Immersion

Immersion refers to the state of being deeply engaged or absorbed in an activity or environment to the extent where one loses awareness of the outside world. It involves a complete focus on the present moment which often leads to a flow state where time seems to pass quickly.[^frances09immersion]

The term "Immersive technology" refers to technologies that merge the physical and digital world together. Two examples of this would be [AR](./ar.md) and [VR](./vr.md) which engage the user through a screen and the physical world at the same time.[^ryan99immersion]

Immersion relates equaly to psychology, media studies, and the arts, since it explores how individuals engage with various stimuli and environments. It also intersects with theories of attention, consciousness, and presence, offering insights into human experiences and perceptions.[^wolf17immersion]

[^frances09immersion]: Frances, Dyson. 2009. “Immersion.” In Sounding New Media: Immersion and Embodiment in the Arts and Culture, 1st ed., 107–35. University of California Press.

[^ryan99immersion]: Marie-Laure, Ryan. 1999. “Immersion vs. Interactivity: Virtual Reality and Literary Theory.” SubStance 28, no. 2. 110–37. 

[^wolf17immersion]: Wolf, Mark J. P. 2017. “Beyond Immersion: Absorption, Saturation, and Overflow in the Building of Imaginary Worlds.” In World Building, edited by Marta Boni, 204–14. Amsterdam University Press.


## Information Architecture 


Information architecture is an area within the field of library and information science. [^dillon05information_architecture] It is the practice of making information easily accessible and understandable.[^usibility19information_architecture]
Thus, it involves processes such as searching, categorizing, and presenting relevant information to help individuals understand how to access the things that they are looking to find. [^rosenfeld98information_architecture]

Nowadays, the term has become mostly associated with web design as it is quite useful to create a comprehensible and easily navigated website.[^dillon05information_architecture]
But it is important to remember that the fundamental aspects of information architecture can be easily applied to the physical world and not only to the World Wide Web.[^dillon05information_architecture]
For instance, it is put into use in most public spaces such as department stores and museums. We know exactly that we will be able to find our favorite ice cream flavor in the frozen food aisle just as we know that we will find the Egyptian sarcophagi in the wing of the museum that is dedicated to Egyptian art and artifacts.

In the context of creating a website, information architecture is about setting up a framework such that the user has a cohesive, coherent, and consistent experience. 
The word “architecture” is a fitting metaphor because to achieve such an endeavor of creating a sustainable experience for the user—to create the larger picture—it is important to understand underlying factors and the ways in which they relate to each other within these complex multidimensional information spaces.[^rosenfeld98information_architecture]

Information architecture is more and more significant because we live in a world where information is never-ending.[^usibility19information_architecture]

[^dillon05information_architecture]: Dillon, Andrew, and Don Turnbull. 2005. “Information Architecture.” Repository.arizona.edu. New York: Marcel Dekker. 2005.
[^rosenfeld98information_architecture]: Rosenfeld, Louis, and Peter Morville. 1998. Information Architecture for the World Wide Web. Beijing: O’reilly. 1998.
[^usibility19information_architecture]: Usability.gov. 2019. “Information Architecture Basics .” Usability.gov. 2019. 


## Internet

The Internet is a global network of interconnected computer networks that enables individuals around the world to communicate and exchange information. [^Zare24internet1] 

The word internetted was used as early as 1849, meaning interconnected or interwoven. The word Internet was used in 1945 by the United States War Department in a radio operator's manual, and in 1974 as the shorthand form of Internetwork. Today, the term Internet most commonly refers to the global system of interconnected computer networks, though it may also refer to any group of smaller networks.[^Zare24internet2] 
The term internet (or internetwork) is simply a contraction of the phrase inter-network. However, when written with a capital "I," the Internet refers to a global network of interconnected systems. [^Zare24internet3]

The Internet functions as an interactive medium, linking millions of devices and people. It facilitates data transmission, communication across several platforms, and access to a wide range of information. The Internet is naturally interactive, allowing computer users to communicate across networks. [^Zare24internet4] 

The Internet has empowered ordinary citizens by making it easier for them to produce and distribute information to a variety of audiences. This transformation has caused a fundamental shift in the traditional media landscape. [^Zare24internet5]

![internet](images/internet-zare.PNG)

[^Zare24internet1]: "What Is the Internet?" Spiceworks. Accessed January 28, 2024. https://www.spiceworks.com/tech/networking/articles/what-is-the-internet/.

[^Zare24internet2]: Oxford English Dictionary. "Internetted." Online edition. Oxford University Press. (Subscription or participating institution membership required.) Nineteenth-century use as an adjective.

[^Zare24internet3]: Goswami, S. "The Internet Protocol." In Internet Protocols, published by Springer, Boston, MA, 2003. https://doi.org/10.1007/978-1-4615-0385-9_2.

[^Zare24internet4]: Rust, Roland T., and Sajeev Varki. "Rising from the ashes of advertising." Journal of Business Research 37, no. 3 (1996): 173-181. https://doi.org/10.1016/S0148-2963(96)00067-7.

[^Zare24internet5]: Jenkins, Henry, Ravi Purushotma, Margaret Weigel, Katie Clinton, and Alice J. Robison. Confronting the Challenges of Participatory Culture: Media Education for the 21st Century. The MIT Press, 2009. DOI: https://doi.org/10.7551/mitpress/8435.001.0001. ISBN electronic: 9780262258951.

## Lossless
Lossless is when there is no loss in data. When compressing a file, we want to store fewer bits all while preserving the original content [^brookes2021lossless], this is so that data is easier to store or transmit more efficiently[^lu2016lossless]. Lossless compression occurs when the decompressed data is the same as before the compression occurred[^brookes2021lossless]. For example, PNG is a lossless compression [^brian2022lossless] because the compression does not affect the quality of the image.

Techniques used are called dictionary code and run length encoding. Run length encoding is where redundant data is represented differently to save space. For example, if an image contains 7 yellow pixels instead of storing each yellow pixel 7 time it would be better to say there 7 yellow pixels and would only need to mention that there a yellow pixel one time.[^crashcourse2017lossless]

In our contemporary world, lossless compression is important because we live in a digital era, where more often than not we are constantly sharing information online to our friends, peers and colleagues. Whether it’s images or text files, lossless compression plays a crucial role since it important to be able to send out information quickly and efficiently without losing any of that data.

![lossless.md](images/collage.jpg)

[^brookes2021lossless]: Brookes, Tim. 2021. “Lossy vs. Lossless Compression: What’s the Difference?” How To Geek, https://www.howtogeek.com/744381/lossy-vs-lossless-compression-whats-the-difference/.  
[^crashcourse2017lossless]: CrashCourse. 2017.“Compression: Crash Course Computer Science #21.” YouTube. https://youtu.be/OtDxDvCpPL4?si=N7dJNUot4i-9CwiZ. 
[^lu2016lossless]: Lu, Zhe-Ming, and Shi-Ze Guo. 2016. Lossless information hiding in images. Elsevier Science. https://www.overdrive.com/media/3040124/lossless-information-hiding-in-images. 
[^brian2022lossless]: Pickle, Brian, and Per Christensson. 2022. “Lossless.” Definition - What is lossless compression?. https://techterms.com/definition/lossless. 

## Lossy
Lossy is when there is a loss in data or information. Lossy compression discards as much data as possible in order to make a file smaller. This is done by targeting data that is less noticeable to the human eye.[^brookes2021lossy] When compressing a file, there will be a distortion in the reconstruction of the file. Lossy compression occurs when the decompressed data is not the same as before the compression occurred.[^shukla2011lossy] 

For example, JPEG is a lossy compression because the compression does affect the quality of the image.[^shukla2011lossy]
Techniques used are called color space and Chroma subsampling. Color space reduction is when we reduce the color pixels to the most common colors found in the image. Chroma subsampling refers to when we are averaging or dropping some of the chrominance information in the image. This is because human eyes and perception are able to detect changes in brightness more sharply than color. [^lu2016lossy]

Because we live in a digital era, lossy compression has its advantages in making it easier for us to send files and prioritizing / synthesizing the essential information. But it is worth noting that the more compressed a file is the more the quality of the image or sound will suffer.

[^brookes2021lossy]:Brookes, Tim. 2021. “Lossy vs. Lossless Compression: What’s the Difference?” How To Geek, https://www.howtogeek.com/744381/lossy-vs-lossless-compression-whats-the-difference/. 
[^lu2016lossy]: Lu, Zhe-Ming, and Shi-Ze Guo. 2016. Lossless information hiding in images. Elsevier Science. https://www.overdrive.com/media/3040124/lossless-information-hiding-in-images. 
[^shukla2011lossy]:Shukla, K. K, and M. V Prasad. 2011. Lossy Image Compression : Domain Decomposition-Based Algorithms. Springerbriefs in Computer Science. London: Springer. 



##Meme

Wikipedia defines a meme (/miːm/ MEEM) as an idea, behavior, or style that spreads by means of imitation from person to person within a culture and often carries symbolic meaning representing a particular phenomenon or theme. [^wikipedia24meme]

The term meme was introduced by the biologist Richard Dawkins in his book The Selfish Gene. A meme is a unit of culture, such as “tunes, ideas, catch‐phrases, clothes fashions, ways of making pots or building arches”. Dawkins defined memes as small cultural units of transmission, analogous to genes, which are spread from person to person by copying or imitation.  [^Dawkins76meme]

The phrase “Internet meme” is commonly applied to describe the propagation of content items such as jokes, rumors, videos, or websites from one person to others via the Internet. According to this popular notion, an Internet meme may spread in its original form, but it often also spawns user-created derivatives. [^Shifman13meme]

![meme](images/meme-jaafar.jpg)

[^wikipedia24meme]: “Meme.” 2024. Wikipedia. Wikimedia Foundation. January 18, 2024. https://en.wikipedia.org/wiki/Meme. 

[^Dawkins76meme]: Dawkins, Richard. 2016. The Selfish Gene. Oxford: Oxford University Press.  

[^Shifman13meme]: Shifman, Limor. 2013. “Memes in a Digital World: Reconciling with a Conceptual Troublemaker.” Journal of Computer-Mediated Communication 18, no. 3: 362–77. https://doi.org/10.1111/jcc4.12013 





## Mobile Computing

A quick defintion of mobile computing is basically a service that allows users to send anything electronic related with other users. It is important to know that mobile computing allows fast in real time exchanges between people across the world. The key element to know is that it allows users to interact with each other without wires. Also, this concept allows users to access any network at any time or location. With this brief explanation it's easy to link where mobile computing comes into our daily lives. For example, mobile phones are a perfect demonstration of what mobile computing is because phones permit people to chat or access the net anywhere at anytime.[^Sharma22mobilecomputing]

It's important to realize with Mobile Computing that it isn't only linked to portable devices like phones. The concept expands much further, mobile computing also focuses on creating or merging communication and the Internet. Meaning, the ultimate goal of mobile computing is to create portable and powerful tools/mediums combining ways of communication and technology that can ease our daily tasks.[^Currie(n.d)mobilecomputing].

The easiest way to understand this term is to take it literally. The first part being mobile which means something that can be in motion and not constrained by location or time. The second part being computing meaning a form of technology or something that processes and inputs and outputs something.[^Lutkevich(n.d)mobilecomputing]

![Mobile Computing](images/mobile-computing-narita.png)







[^Sharma22mobilecomputing]: Sharma, Rohini. 2022. “A Review Paper on Mobile Computing,” Journal University of Shanghai for Science and Technology, https://jusst.org/wp-content/uploads/2022/04/A-Review-MOBILE-COMPUTING.pdf![image](https://github.com/Arianna19/CART210-glossary/assets/70153178/21bdc9ae-bde6-4289-a3f3-a330193b058e)
[^Currie(n.d)mobilecomputing]: Currie, Collin. n.d. "Impact of Mobile Computing - Anticipating the Effects on the Campus," Society for College and Univerity Planning. http://webmedia.jcu.edu/institutionaleffectiveness/files/2016/04/PHEV41N2_Article_Impact-Mobile-Computing.pdf.
[^Lutkevich(n.d)mobilecomputing]: Lutkevich, Ben. n.d. "Mobile Computing," TechTarget Mobile Computing, https://www.techtarget.com/searchmobilecomputing/definition/nomadic-computing.


## Multiplatform

In computing, "multiplatform" refers to software capable of running on two or more different hardware platforms. It's also known as cross-platform software, platform-agnostic software, or platform-independent software. [^Zare24multiplatform1]

A "platform" can encompass the type of processor (CPU), other hardware components, or the operating system (OS) on which software operates, or a combination of these factors. [^Zare24multiplatform2]

As new computing platforms emerge, software developers increasingly target multiple platforms to meet the needs of consumers who use various devices for personal and business activities like communication, banking, and shopping. [^Zare24multiplatform3]
For instance, software available for both Windows and Mac desktop environments, or for iOS and Android mobile devices, is considered multiplatform. Similarly, an interpreter, though sharing the same source code, may have runtime engines tailored for different hardware platforms. [^Zare24multiplatform4]

Cross-platform programming involves intentionally writing software to function on multiple platforms. This term can extend to video games which are compatible with various platforms, including PCs, consoles, and smartphones. [^Zare24multiplatform5]


[^Zare24multiplatform1]: SDD Technology. "Definition of Cross-Platform." Accessed March 2, 2024. https://www.sdd-technology.com/news/definition-of-cross-platform.

[^Zare24multiplatform2]: LINFO. "Platform." Accessed March 2, 2024. https://www.linfo.org/platform.html.

[^Zare24multiplatform3]: Roy Choudhary, Shauvik. 2014. "Cross-platform testing and maintenance of web and mobile applications." In Companion Proceedings of the 36th International Conference on Software Engineering, pp. 102-103.

[^Zare24multiplatform4]: PCMag. "Multiplatform." Accessed March 2, 2024. https://www.pcmag.com/encyclopedia/term/multiplatform.

[^Zare24multiplatform5]: Hu, Hanwen, Yuan Tian, Safwat Hassan, Dayi Lin, and 2023 IEEE Conference on Games (CoG) Boston, MA, USA 2023 Aug. 21 - 2023 Aug. 24. 2023. “2023 Ieee Conference on Games (Cog).” Essay. In Analyzing Gamer Complaints in Reviews of Cross-Platform Video Games on Steam, 1–8. IEEE.    

## Natural Language Processing
Natural Language Processing (NLP) is a broad field driven by both computerized and theoretical approaches to analyze and represent human languages.[^Chowdhary01NPL]

As this topic related to Natural Language Processing (NPL) remains a very active area for research and development, many might acknowledge that a one-size-fits-all approach for definiting this field might not fit all. Altought, a commont central purpose and understanding knowledge remains including the goal of achieving human-like language processing for a various of tasks and application.[^Liddy02NPL]


[^Chowdhary01NPL]: Chowdhary, K.R. 2020. "Fundamentals of Artificial Intelligence". India: Springer Nature: 603-649. 

[^Liddy02NPL]: Liddy, E.D. 2001. "Natural Language Processing*. In Encyclopedia of Library and Information Science". Marcel Decker, Inc. NY. 2nd Ed. 


## Network Security

The first thing to know is that Network Security is an extremely complex term. The first thing to understand Network Security is that it is a sub-term under a huge umbrella being computer secuity. An overall explanation of Network Security would be that it's purpose is to provide privacy and confidentiality on the internet. This goal is achieved with how the security functions. Simply put, the main things that Network Security watches are network monitoring, detects intrusion and completes analyses on digital traffic. [^Marin05networksecurity]

It's important to realize that Network Security was created due to the rapid evolution of technology and how easily information is accessible today. With that being said, this creation of internet being in all of our lives and at the tip of our fingers raises risks of invasion of privacy of anyone using it. Now, this is where Network Security comes handy because it's ultimate goal is protect the rights and interests of citizens using technology.[^Sun20networksecurity]

After all that, a really easy way to understand Network Security is fueled by some main goals. These can be, protection against cyberattacks, security breaches and provide users with a secure way of getting any type of resources at anytime. Now this is achieved in multiple ways thanks to Network Security. Protection is achieved through firewalls, network access control, intrustion detection and prevention systems, virtual private networkds, application security and email security.[^WhatIs(n.d)networksecurity] (To understand each and their function/purpose I recommend visiting the cited website) 






[^Marin05networksecurity]: Marin, Gerald A. 2005. "Network Security Basics." IEEE Secutiry & Privacy 3, https://ieeexplore.ieee.org/abstract/document/1556540. 
[^Sun20networksecurity]: Sun, Jiaqi. 2020. "Computer Network Security Technology and Prevention Strategy Analysis." Procedia Computer Science, https://www.sciencedirect.com/science/article/pii/S1877050922015204.
[^WhatIs(n.d)networksecurity]: "What is Network Security | IMB," n.d., https://www.ibm.com/topics/network-security.


## Neural Networks

Neural networks are computational frameworks that mimic the brain's structure consisting of layers of interconnected nodes (neurons). These networks, through training, learn to perform tasks by adjusting connections based on input data, improving accuracy over time without explicit task-specific programming. They are fundamental in fields like image recognition, natural language processing, and more, due to their ability to learn from vast amounts of data and identify patterns that are not easily discernible by humans. [^NeuralNetworksHerve] . Neural networks are advanced tools for solving specific problems in areas like pattern recognition and data analysis due to their high speed and learning capabilities from examples (training data sets). [^NeuralNetworksBishop] . 

Overall, Neural network research explores how computers can mimic the brain's way of processing information, moving away from traditional step-by-step computing to more interconnected and simultaneous methods. Researchers are trying to simplify and understand how these brain-like systems can solve complex tasks by focusing on neurons, which are like tiny processing units influenced by their connections' strengths. They also look into how these networks learn and improve through a process called backpropagation. [^BasicIdeasInNeuralNetworks] .

[^NeuralNetworksHerve]:Abdi, Hervé. 1999. "Neural Networks." Quantitative Applications in the Social Sciences Series, no-07-124, Sage Publications.

[^NeuralNetworksBishop]:Bishop, Chris. 1994. "Neural networks and their applications."  Rev. Sci. Instrum, 65, 1803–1832, AIP Publishing.

[^BasicIdeasInNeuralNetworks]:Rumelhart, David E., Bernard Widrow, and Michael A. Lehr. "The basic ideas in neural networks." Communications of the ACM, March 1994, 87+. Gale Academic OneFile (accessed January 29, 2024). https://link.gale.com/apps/doc/A15061351/AONE?u=anon~d019914e&sid=googleScholar&xid=256644c0.

## NFT 

A Non-Fungible Token, or NFT, is a unique digital identifier that gets stored on a Blockchain[^opensea22nft]. Essentially, it’s a completely unique link representing a digital item that gets added to an ever-growing and immutable list, serving as a publicly accessible record. 


[^christain22nft]: Christian Pinto-Gutiérrez, Sandra Gaitán, Diego Jaramillo, and Simón Velasquez. 2022. The Nft Hype: What Draws Attention to Non-Fungible Tokens? 10 (335): 335–335. https://doi.org/10.3390/math10030335.

[^fortnow22nft]: Fortnow, Matt, Quharrison Terry, and Kendrick Nguyen. 2022. The Nft Handbook: How to Create, Sell and Buy Non-Fungible Tokens. *Hoboken, New Jersey: John Wiley & Sons*. 

[^opensea22nft]: Opensea. “NFTs Explained: What They Are,” August 26, 2022. https://opensea.io/learn/nft/what-are-nfts.


## Open Source

Open source refers to software with source code made accessible to the public to view, modify, and distribute. It centers around community collaboration, the importance of peer review, and process transparency. [^osi01Wiki] Open source software is typically available for no charge and prevents entities from having total market control over source code. [^diffingo02Wiki]

Software sharing was integral throughout software’s early history, but as software became less tied to specific hardware and more monetizable, proprietary software became more appealing to companies. The free software movement arose in response to this through important figures such as Richard Stallman. With ambiguity surrounding the word “free”, the idea of open source was proposed. [^producingOSS03wiki] The history of the free software movement and the open-source-software movement are closely interlinked but remain separate movements. 

Some popular examples of open source software include the Linux operating system, the Mozilla Firefox browser, and LibreOffice.

[^producingOSS03wiki]: Fogel, Karl. 2022. *Producing Open Source Software*. https://producingoss.com/.

[^osi01Wiki]: “The Open Source Definition.” 2006. Open Source Initiative. July 7, 2006. https://opensource.org/osd/.

[^diffingo02Wiki]: “What Is Open Source Software.” n.d. Diffingo Solutions Inc. Accessed January 29, 2024. https://diffingo.com/oss/whyoss.

## Pantone
Pantone is a color system used in printing that allows for a universal agreement on specific colors we expect to get from print.

There are two color systems that designers can work with depending on their needs, the Pantone Matching System and the Pantone Fashion, Home + Interior System.  [^pantone24what]

#### Pantone Matching System (PMS):
This system is meant for designers who work on print projects such as editorial, packaging, digital and screenprinting.[^pantone24what]

#### Pantone Fashion, Home + Interior System (FHI):
This system is useful for projects a variety of projects unrelated to prints. It is often used by fashion designers and interior designers when working with apparel, fabrics, soft goods, cosmetics, paints, leather and accessories. [^pantone24what]

The purpose of having two color systems is to better control the appearance of color depending on the material the designer works with. Some colors can not be produced on certain materials. The Pantone system helps designers guarantee that the end product will match the exact Pantone color swatch they chose during production.

### Pantone vs [CMYK](../main/glossary.md#CMYK)
Pantone is more costly than printing in [CMYK](../main/glossary.md#CMYK) since it requires more labor. The print technician must follow color mix specifications to achieve the exact Pantone swatch requested. This process creates a color that is solid and saturated. On the other hand, [CMYK](../main/glossary.md#CMYK) in printing separates the file into cyan, magenta, yellow and black. Dots of each colors are printed on the surface to reach the final product. This can sometimes create variations in color differing from what is seen on the computer screen.[^paperstreet09when]

Using the Pantone system is good for printing projects that do not have many colors. It also allows designers to print colors unachievable with [CMYK](../main/glossary.md#CMYK) such as gold, silver and neon colors. However, [CMYK](../main/glossary.md#CMYK) can also do a decent print job, especially for projects with color photography. It is up to the designer to decide which system better suits their project.

### Pantone in New Media Art
The Pantone color system promises artists consistency in their color palettes throughout the various formats of their projects. This allows the artist to be confident in the accuracy of their color whether digitally or printed, regardless of the material. The color system is available on industry-approved applications like the Adobe Suite used in many media production.[^rhyne17applying] 

[^pantone24what]: Pantone. 2024. "What Are Pantone Color Systems?" Accessed January 17, 2024. https://www.pantone.com/color-systems/pantone-color-systems-explained.
[^paperstreet09when]: PaperStreet. 2009. "When to Use CMYK colors v. Pantone colors." Accessed January 17, 2024. https://www.paperstreet.com/blog/why-you-need-to-know-cmyk-colors-v-pantone-colors/.
[^rhyne17applying]: Rhyne, Theresa-Marie. 2017. "Applying Color Theory to Digital Media and Visualization." Accessed February 26, 2024. https://dl.acm.org/doi/pdf/10.1145/3027063.3076594. 
## Pattern Recognition

Pattern Recogntion is a machine learning process in which the computer is fed a large pool of data that they will attempt to find regularities in order to automatically recognise the content. This recognition can be applied to any form of media whether it be text, images, sounds and much more. It is also expected that the algorithm can "recognize and classify unfamiliar objects, recognize shapes and objects from different angles, and identify patterns and objects even if they’re partially obscured."[^citation1]

Scientific innovations such as prostehtic arms can use this technology to their advantage by applying Electromyographic (EMG) pattern recognition which is a recognition system "constructed for real-time control of a prosthetic arm through precise identification of motion and speed command" [^citation3]. This method uses an accumulation of data such as distances recorded with the help aritificial intelligence and multiple reference paremeters.  [^citation2]

Other practical applications of pattern recognition can be found in every day life such as speech and fingerprint recognition used by your smartphone, image recognition that can define contrasts in a photo as well as more professional fields such as the medicine and economy which uses it for medical imaging and data analysis to predict the market fluctuations. [^citation1]

[^citation1]: "Pattern Recognition", arm, accessed Janurary 30, 2024, https://www.arm.com/glossary/pattern-recognition
[^citation2]: Park, Sang-Hui, and Seok-Pil Lee. "EMG pattern recognition based on artificial intelligence techniques." IEEE transactions on Rehabilitation Engineering 6, no. 4 (1998): 400-405.
[^citation3]: Lee, Sukhan, and G. Saridis. "The control of a prosthetic arm by EMG pattern recognition." IEEE Transactions on automatic control 29, no. 4 (1984): 290-302.


## Post-Digital

The term ‘post-digital’ was introduced by Kim Cascone when he described a trend in digital music in his text “The Aesthetics of Failure: ‘Post-Digital’ Tendencies in Contemporary Computer Music”, writing that digital technology had reached everyone in some form or another. [^PostDigitalWiki_1] 
Post-digital refers to the concept or era where the boundaries between the physical world and the digital world become blurred. Post-digital does not refer to the concept of digital technology becoming obsolete, but rather a time where digital technology becomes ubiquitous. [^PostDigitalWiki_2]  An example of this could be the way someone could view their cellphone or smart watch as an extension of their self. This is contrasted by the early days of digital technology and personal electronics, when someone may have had a room set up for their computer, and set aside specific time to use it. The ‘post’ in post-digital should not be understood as a linear progression past digital technology, but rather a cultural shift and evolution of how we perceive it. [^PostDigitalWiki_3] 

![Post-Digital](images/postdigital_katrinafrain.png)
[^PostDigitalWiki_4] [^PostDigitalWiki_5] 

[^PostDigitalWiki_1]: Cascone, Kim. “The Aesthetics of Failure: ‘Post-Digital’ Tendencies in Contemporary Computer Music.” Computer Music Journal 24, no. 4 (2000): 12–18. http://www.jstor.org/stable/3681551.

[^PostDigitalWiki_2]: Tinworth, Adam. “What Is Post Digital?” NEXT Conference, May 17, 2021. https://nextconf.eu/2012/01/what-is-post-digital/. 

[^PostDigitalWiki_3]: Cramer, Florian. “What Is ‘Post-Digital’?” Postdigital Aesthetics, 2015, 12–26. https://doi.org/10.1057/9781137437204_2. 

[^PostDigitalWiki_4]: Blan, Marjan. Photograph. 2020. Unsplash. https://unsplash.com/photos/white-textile-on-brown-wooden-table-_kUxT8WkoeY.

[^PostDigitalWiki_5]: parinya. Tropical tree leaves and branch foreground. n.d. Photograph. Adobe Stock. https://stock.adobe.com/ca/images/tropical-tree-leaves-and-branch-foreground/528627023?prev_url=detail&asset_id=528627023.

## Posthuman

![Posthuman](images/posthuman-hoang.jpg)

The posthuman is a broad concept defined by two differing - and at times contradicting - schools of thought: the posthuman as "a category that attempts to capture some future configuration"[^rugo20posthuman] and the posthuman as "a condition."[^rugo20posthuman] 

On one hand, the posthuman is a subject of human enhancement characterized by at least one capacity that transcends human limitations, unaided by modern technology[^bostrom06posthuman]. This view implies the use of advanced technology, genetic manipulation, and biointervention [^cohen21posthuman] to bring to life such 'advancements' to the human being. Swedish philosopher and writer Nick Bostrom outlines three general capabilities that, if achieved at greater heights than human's capabilities, would define the posthuman: health (to maintain physical and mental health), cognition (general intellect and other special faculties), and emotion (to enjoy life and 'properly' respond to life).[^bostrom06posthuman]

On the other hand, the posthuman is also conceived as a critique of humanism, of the centralization of the human amongst non-humans, and of the idea of man as a measure of all things. Unlike the former school of thought, which seeks to further human superiority - viewing the posthuman as "an extension of rational mastery"[^rugo20posthuman], this philosophical framework "promotes horizontal ontologies and expanded ethics."[^rugo20posthuman] 

However, both ends compel self-reflection, positing a need to renew the existing definition of human in relation to other beings, to question what makes up the human body and mind, that is critical to define the future human, the posthuman. Judith Halberstam and Ira Livingston, in defining posthuman bodies, recall Donna Haraway's "one is too few, two is too many" with respect to her cyborg in order to argue that assemblages should priviledge "someness" over our current "mind-body dualism with a heterogeneous monism" in which "someness" isn't a quantity in waiting, but rather threads the line between the numerable and inumerable.[^halberstamLivingston95posthuman] As the relationship between human and non-human - machine, notably - exponentially develops thus blurring the lines between the two in a symbiosis, and as the human body and mind become increasingly hybrid, posthuman discourse (from both schools of thought) becomes increasingly pressing. 


[^bostrom06posthuman]: Bostrom, Nick. “Why I Want to Be a Posthuman When I Grow Up.” Medical Enhancement and Posthumanity, n.d., 107–36. https://doi.org/10.1007/978-1-4020-8852-0_8. 

[^cohen21posthuman]: Cohen, David. “What Does It Mean to Be Posthuman?” New Scientist, March 9, 2021. https://www.newscientist.com/article/mg21829162-400-what-does-it-mean-to-be-posthuman/. 

[^rugo20posthuman]: Rugo, Daniele. “Posthuman.” Oxford Research Encyclopedia of Literature, July 30, 2020. https://doi.org/10.1093/acrefore/9780190201098.013.1136. 

[^lewis21posthuman]: Lewis, Richard S. Technology, Media Literacy, and the human subject, June 3, 2021. https://doi.org/10.11647/obp.0253. 

[^halberstamLivingston95posthuman]: Halberstam, Judith M., and Ira Livingston, eds. Posthuman bodies. Indiana University Press, 1995.

## Quantum Computing
Quantum Computing is an emerging type of computing that utilizes principles of quantum mechanics to expedite certain processes and calculations, faster than classical computing. A key principle in the difference between quantum and classical computing is qubits. Like bits, a qubit can be in 2 states, a 0 or a 1. However, operating under quantum mechanics, a qubit can be in a third state called superposition. This essentially means that, before being measured, a qubit exists in the states of 0 and 1 simultaneously[^mcmahon08quantum]. This allows the quantum computers to process multiple calculations concurrently and sort databases with optimized algorithms which accelerates the processing speed. This function is called parallelism[^gruska99quantum]. 
Another quantum mechanic property that qubits posses is entanglement. This is the concept of two or more particles (or qubits) become entwined where the state of one particle determines the state of the other particle (and vice-versa) regardless of distance[^rieffel00introduction]. This principle permits qubits to execute specific quantum algorithms that enhance information processing as well as perform parallelism tasks instantly through intertwined qubits. These operations of the qubits are all manipulated through quantum gates, which are the foundational element of quantum computing[^mcmahon08quantum]. Sequences quantum gates are used to create quantum circuits, which are representations of quantum algorithms. 
While the potential of quantum computers is immense and exciting, the practicality of these computers is lacking. To construct this machine, it requires an immense amount of cooling to maintain the superconducting capabilities of the materials. Specifically, about a hundredth of a degree above absolute zero[^ibm24quantum]. This requires super-cooling fluids which cost a lot of money and make these machines inaccessible to regular people and exclusive to companies who have the space and funds. 

[^gruska99quantum]: Gruska, Jozef. 1999. Quantum computing. London: McGraw-Hill. 
[^mcmahon08quantum]: McMahon, David. 2008. Quantum Computing explained. Hoboken New Jersey: John Wiley & Sons, Inc. 
[^rieffel00introduction]: Rieffel, Eleanor,  and Wolfgang Polak. (September 2000). “An Introduction to Quantum Computing for Non-Physicists.” ACM Computing Surveys 32, no. 3: 300–335. https://doi.org/10.1145/367701.367709. 
[^ibm24quantum]: “What Is Quantum Computing?” IBM. Accessed January 29, 2024. https://www.ibm.com/topics/quantum-computing#:~:text=Two%20superconductors%20placed%20on%20either,insulator%20form%20a%20Josephson%20junction.&text=Our%20quantum%20computers%20use%20Josephson,individual%20units%20of%20quantum%20information. 

## Ransomware

Ransomware is a specific class of malware that demands a payment (usually in the form of [cyrptocurrency](../main/glossary.md#crytocurrency)) in exchange for a stolen functionality. The phenomenon first appeared around 2005, and indidents have only increased. Most ransomwares “make an intensive use of file encryption as an extortion means"[^Gazet10RW]. Often, the ransomeware encrypts various files on victim’s hard drives before asking for a ransom to get the files decrypted. 

There are 4 more major types of ransomware:[^Razaulla23RW] 
1. Crypto: encrypts data important to victims
2. Locker: locks victims out of their systems
3. Scareware: tricks users into buying or downloading malicious software, often through startling messages
4. Leakware: threatens to make users data public unless a ransom is paid

In 2023, ransomeware payouts totaled over $1.1 billion USD from an estimated 4,399 different attacks - the most costly year ever, twice as much as the year before. However, only 29% of ransomware victims in the final quarter of 2023 paid the demanded ransoms - a significant drop from years before, where 70-80% were paid, which suggests more lucrative targets are being selected for attacks. Close to 75% of ransomeware payouts top the million dollar mark.[^Greenberg24]

- want to add something about political uses of ransomware vs criminal

[^Gazet10RW]: Gazet, Alexandre. 2010. “Comparative Analysis of Various Ransomware Virii.” <i>Journal in Computer Virology</i> 6 (1): 77–90. https://doi.org/10.1007/s11416-008-0092-2.

[^Razaulla23RW]: Razaulla, Salwa, Claude Fachkha, Christine Markarian, Amjad Gawanmeh, Wathiq Mansoor, Benjamin C. M. Fung, and Chadi Assi. 2023. “The Age of Ransomware: A Survey on the Evolution, Taxonomy, and Research Directions.” <i>IEEE Access</i> 11: 40698–723. https://doi.org/10.1109/ACCESS.2023.3268535.

[^Greenberg24]: Greenberg, Andy. 2024. “Ransomware Payments Hit a Record $1.1 Billion in 2023.” *WIRED*. February 7, 2024. https://www.wired.com/story/ransomware-payments-2023-breaks-record/.


## Social Networking
The act of social networking refers to using any form of internet-based social media websites, such as Instagram, Twitter, and Facebook to stay connected with family and friends alike, while also sharing any multiple forms of media[^Kenton] (Kenton, 2023). From the examples listed, they each have different uses, for example, Instagram is a video and picture sharing application where others can like and share the things you upload. Twitter is a communication network, where users can share their thoughts by using hashtags. Lastly, Facebook is an application meant for connecting with friends and distant family members to remain in touch with them. The use of social networking can either be social, to communicate and interact with others online, or business, to talk about your field with likeminded individuals. It has changed “our means of gathering information and communicating with each other and contributing to both these practices through creative production”[^Fenton]. While there are some advantages about social networking there are also some disadvantages such as the spreading of misinformation, anonymity, and cause depressive symptoms, anxiety, and low self-esteem[^Pantic].

[^Kenton]:Kenton, Will. 2023. Review of What Is Social Networking? Edited by Julius Mansa and Amanda Jackson. Investopedia. Investopedia. December 22, 2023. https://www.investopedia.com/terms/s/social-networking.asp#:~:text=Social%20networking%20refers%20to%20using,)%2C%20Instagram%2C%20and%20Pinterest
[^Pantic]:Pantic, Igor. 2014. “Online Social Networking and Mental Health.” Cyberpsychology, Behavior, and Social Networking 17 (10): 652–57. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4183915/.
[^Fenton]:Fenton, Natalie, James Curran, and Des Freedman. (2012) 2012. Misunderstanding the Internet. Routledge: Routledge. https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:15b11af5-7d71-319e-97cb-81ad5a2a547d.

## Collage on Social Networking

![Social Networking](images/social-networking-aivaliklis.png)

Top Left image[^TherapyEverywhere]

Bottom Left image[^Nguyen]

Center image[^Nawaz]

Top Right image[^Gordon]

Bottom Right image[^McCoy]

[^Gordon]:Gordon, Sherri, ed. 2021. 5 Ways Social Media Affects Teen Mental Health. VerywellFamily. https://www.verywellfamily.com/ways-social-media-affects-teen-mental-health-4144769.

[^McCoy]:McCoy, Julia, ed. 2021. 11 Proven Tips to Get More Social Media Followers. SearchEngineJournal. https://www.searchenginejournal.com/get-social-media-followers/208397/.

[^Nawaz]:Nawaz, Burhan, ed. 2023. The Benefits and Drawbacks of Social Media. LinkedIn. https://www.linkedin.com/pulse/benefits-drawbacks-social-media-burhan-nawaz.

[^Nguyen]:Nguyen, Therese, ed. 2023. 7 Easy Ideas to Increase TikTok Engagement. RivalIQ. https://www.rivaliq.com/blog/increase-tiktok-engagement/.

[^TherapyEverywhere]:TherapyEverywhere, ed. 2024. What Social Networking Platform Is Right for Me? TherapyEverywhere. https://therapyeverywhere.com/social-networking-for-therapists/.

![social-networking-aivaliklis](https://github.com/concordia-dcart/CART210-glossary/assets/85772853/b205b15f-880c-4e34-b317-1f5da5685cd5)

## Software

Software is a collection of commands or instructions that tell a computer how to behave [^software3]. It is opposite to hardware, which refers to all physical components of a computer [^software1]. Software encompasses not only the code which a computer executes, but also the process of designing and testing the code [^software2].

[^software1]: “Software | Definition, Types, & Facts | Britannica.” n.d. Accessed January 29, 2024. https://www.britannica.com/technology/software.
[^software2]: Osterweil, Leon. 2018. “What Is Software?:” In , 59–76. https://doi.org/10.1007/978-3-319-73897-0_4.
[^software3]: “What Is Software? Definition, Types, Examples, and More.” n.d. Accessed January 29, 2024. https://www.geeksforgeeks.org/software-and-its-types/.


## Technological determinism

Technological determinism (TD) is an ideology that asserts that technology fundamentally shapes and influences the development and progress of society. [^adler06technological_determinism] Simply: technology controls the progress of society. Technology is portrayed as an autonomous force with the power to be drivers of social and cultural change, with the belief that technological innovations independently and inevitably shape human society.

The key features of technological determinism include[^chandler95technological_determinism]:

1. Inevitability: TD argues that the impacts of certain technological developments on society and environment are inevitable.

2. Autonomy: TD often implies a level of autonomy for technology, suggesting it progresses and drives societal changes, regardless of human influence.

3. Impact on Social Structure: TD contends that technology not only influences social change but can permeate through social structures, institutions, and behaviors.

4. Unidirectional Influence: TD considers the influence of technology typically unidirectional, with technology being the driving force and society adapting around the changes it brings.

Critics of technological determinism argue that it oversimplifies the complex relationship between technology and society.[^dafoe15technological_determinism] They contend that other factors, such as political, economic, and cultural, play significant roles in shaping the impact of technology on society. Technological determinism faces challenges, especially when historical evidence reveals periods of technological regression in which societies experience setbacks in technological development.

Bibliography:

[^adler06technological_determinism]: Adler, Paul  S. “Technological Determinism” Draft Entry for The International Encyclopedia of Organization Studies, Edited by Stewart Clegg and James R. Bailey (Sage). University of Southern California, 2006. https://faculty.marshall.usc.edu/Paul-Adler/research/revisingTechnological%20Determinism.pdf.

[^chandler95technological_determinism]: Chandler, Daniel. “Technological Determinism.” Key Concepts in Media and Communications, September 18, 1995, 218–22. https://doi.org/10.4135/9781473914582.n44.  

[^dafoe15technological_determinism]: Dafoe, Allan. “On Technological Determinism: A Typology, Scope Conditions, and a Mechanism.” Science, Technology, & Human Values 40, no. 6 (2015): 1047–76. http://www.jstor.org/stable/43671266.

## Telepresence

The word “telepresence” refers to real-time techniques that simulate the presence of a person in another space  using various digital systems.[^Lombard97presence]
Telepresence technology often makes particular use of sound and sight. In particular thanks to sensors such as cameras or microphones
But it can also include other sensory sources such as touch.[^Held92telepresence]

[^Held92telepresence]: Held, R (1992) on 124th Meeting of the Acoustical Society of America
https://pubs.aip.org/asa/jasa/article/92/4_Supplement/2458/620791/Telepresence

[^Lombard97presence]: Lombard, M., & Ditton, T. (1997). At the heart of it all: The concept of presence. Journal of Computer-Mediated Communication,(p0-01) https://www.scirp.org/reference/ReferencesPapers?ReferenceID=1426936 

The wikipedia page of the word telepresence.
​​https://en.wikipedia.org/wiki/Telepresence 

ChatGPT4 to help me find references and to translate some texts.


## UI (User Interface)
### Definition

UI, also known as User Interface, is the human-computer point of contact in any  digital device, application, or software [^coursera01ui].

(under construction + placeholder for my sources)
- [^harris02ui]
- [^mckay03ui]
- [^kristiadi04ui]

### Examples

### Difference Between UX and UI
| UX  | UI  |
| --- | --- |
| -   | -   |
| -   | -   |


[^coursera01ui]: Coursera Staff. 2023. “What Is Ui Design? Definition, Tips, Best Practices.” Coursera. https://www.coursera.org/articles/ui-design. 
[^harris02ui]: Harris, Patricia. 2017. "What Is User Interface Design?" The Rosen Publishing Group, Inc.
[^mckay03ui]: McKay, Everett N. 2013. "UI is communication: How to design intuitive, user centered interfaces by focusing on effective communication" Newnes.
[^kristiadi04ui]: Kristiadi, Dedy Prasetya, Yogi Udjaja, Budiman Supangat, Randy Yoga Prameswara, Harco Leslie Hendric Spits Warnars, Yaya Heryadi, and Worapan Kusakunniran. 2017. "The effect of UI, UX and GX on video games." In 2017 IEEE International Conference on Cybernetics and Computational Intelligence (CyberneticsCom), pp. 158-163. IEEE.




## User
A user has many definitions, but let’s focus on the concept of an end user within the technology field. An end user is a person who utilizes a product or service such as a computer, software and many more, without involvement in its production or sell. Therefore, they are often referred to as customer and operator[^TheStateOfTheArtInEndUser]. End users typically have user accounts with usernames and passwords to authenticate themselves within a system.[^Chinel23Whatisuser]

The term "user" originates from the Old French word "user," meaning to employ or make use of, and also from Vulgar Latin "usare," which denotes making use of or taking advantage of something. The term "user" in the context of computers was invented in 1967. [^etymolineUser] One of the earliest instances of its use in the context of computing can be traced back to the pioneering work at institutions like the Digital Equipment Computer Users' Society.[^StackExchangeWhyCalledUsers]

Understanding the needs of customers who utilize the product is important for developing the best product tailored for the intended users. In addition, gathering input from users through surveys, interviews, and testing can provide valuable feedback. This feedback can help identify areas for improvement and enable the customization of the user experience to better meet the users’ needs.[^Indeed23WhatIsAnEndUser]

Users interact with technology in various ways, including navigating interfaces, inputting commands, providing data, and receiving outputs. Therefore, user experience (UX) and User Interface (UI) play a crucial role in the success of a product or service. It is important to consider the end-user experience during the developing of the products and services.[^IntuitMailchimp24EndUser]


[^TheStateOfTheArtInEndUser]: Ko, Andrew J.; Abraham, Robin; Beckwith, Laura; Blackwell, Alan; Burnett, Margaret; Erwig, Martin; Scaffidi, Chris; Lawrance, Joseph; Lieberman, Henry; Myers, Brad; Rosson, Mary Beth; Rothermel, Gregg; Shaw, Mary; Wiedenbeck, Susan. 2011. "The State of the Art in End-User Software Engineering": 1–44. ACM Computing Surveys. https://web.media.mit.edu/~lieber/Publications/End-User-Software-Engineering.pdf).

[^Chinel23Whatisuser]: Chisel glossar. 2023 “What Is User? Definition, Types and Role.” https://chisellabs.com/glossary/what-is-user/.

[^etymolineUser]: Online Etymology Dictionary. 2017. "User (n.)." https://www.etymonline.com/word/user.

[^StackExchangeWhyCalledUsers]: Graf, Michael. 2023. "Why were computer customers called "Users"?." StackExchange. https://retrocomputing.stackexchange.com/questions/15202/why-were-computer-customers-called-users.

[^Indeed23WhatIsAnEndUser]: Indeed Editorial Team. 2023. “What is an End User? Definition, Examples and Tips.” Indeed. https://www.indeed.com/career-advice/career-development/end-user.

[^IntuitMailchimp24EndUser]: Intuit Mailchimp. 2024. “End User.” https://mailchimp.com/marketing-glossary/end-user/.


## UX (User Experience)
### Definition

UX, also known as UX design or User Experience, is a concept in the field of human-computer interaction [^yablonski01ux].

(under construction)
- [^berni02ux]

### Examples

### Difference Between UX and UI
| UX  | UI  |
| --- | --- |
| -   | -   |
| -   | -   |


[^yablonski01ux]: Yablonski, Jon. Laws of UX. 2024. " O'Reilly Media, Inc."
[^berni02ux]: Berni, Aurora, and Yuri Borgianni. 2021. "From the definition of user experience to a framework to classify its applications in design." Proceedings of the Design Society 1 (2021): 1627-1636.

## Version Control

Version Control Systems (VCS) are a type of [software](#software.md) used in programming. Their purpose is to help manage code during the development of a project so as to ensure a proper workflow and effort coordination in the development team.

Namely, it keeps track of every change made in the project and by whom, it allows the possibility to protect certain versions of the code from being edited directly and lets the code updates get reviewed by at least another person before being merged into the rest of. It's also useful when trying to find bugs in the code that appear in later versions by comparing it to older ones.[^Atlassian-VCS]

Version control systems are split between two distinct categories: Centralized Version Control Systems (CVCS) and Distributed Version Control Systems (DVCS). The main difference between the two is how the file repository is managed, CVCS using a unique centralized server as its name implies, while DVCS have each user keep a local repository on their computers.[^Zolkifli-VCS]

DVCS are the most commonly used, namely because it allows users to work without network connection, altough uploading and sharing the files requires being online, and the decentralized infrastructure allows for remote work from many different locations. Most systems in this category are free and [open-source](#opensource.md).

Alternatively, CVCS require a constant connection to the server to have access to the project files, and the single connection points means that, should server access be unavailable, work cannot be done and it is possible for changes to be lost. However, it does save space on the programmer's local machine considering they don't need to copy the full code on it, which is useful for complex and heavy projects.[^Gitlab-VCS]

Some examples of version control systems include:
- [Git](#git.md) - DVCS
- Bitbucket - DVCS
- Mercurial - DVCS
- Subversion - CVCS
- Perforce - CVCS

Version control systems are also known as Source Code Management (SCM) or Revision Control Systems (RCS).

![critical-one-page-collage](../images/version-control-dudemaine.png)[^Carreon-img-VCS]

[^Atlassian-VCS]: Atlassian. "What Is Version Control | Atlassian Git Tutorial." Atlassian. Accessed January 28, 2024. [https://www.atlassian.com/git/tutorials/what-is-version-control](https://www.atlassian.com/git/tutorials/what-is-version-control)

[^Gitlab-VCS]: Gitlab. "What Is A Centralized Version Control System." Gitlab. Accessed January 28, 2024. [https://about.gitlab.com/topics/version-control/what-is-centralized-version-control-system/](https://about.gitlab.com/topics/version-control/what-is-centralized-version-control-system/)

[^Zolkifli-VCS]: Zolkifli, Nazatul Nurlisa, Amir Ngah, and Aziz Deraman. 2018. "Version Control System: A Review." *3rd International Conference on Computer Science and Computational Intelligence*: 408-415. [https://www.sciencedirect.com/science/article/pii/S1877050918314819](https://www.sciencedirect.com/science/article/pii/S1877050918314819)

[^Carreon-img-VCS]: Carreon, Hector, and Fevrier Valdez. 2022. "A new mycorrhized tree optimization nature-inspired algorithm." Scientific Figure on ResearchGate. Accessed February 9, 2024. [https://www.researchgate.net/figure/Symbiosis-between-tree-roots-and-fungi_fig1_358897496](https://www.researchgate.net/figure/Symbiosis-between-tree-roots-and-fungi_fig1_358897496)

## Virtual Environment

Virtual environments are the technology which facilitates interactions between users and computer-generated artificial environments.[^ve3] These interactive computer displays are designed to create the illusion that the user has been transported to a different location.[^ve1] In a virtual world, the user can use their senses and their body in a similar way to the real world. They can turn their head to see their surroundings, trace sounds to the direction they are coming from, and use their hands to pick up virtual objects [^ve2]. Virtual environments are thus the most natural form of interaction between humans and computers.[^ve2] 

![Virtual environment](images/virtualenvironment-vigliensoni.png)[^reschke07wallpaper]

[^ve1]: “What Are Virtual Environments? | IEEE Journals & Magazine | IEEE Xplore.” n.d. Accessed January 29, 2024. https://ieeexplore.ieee.org/abstract/document/250914.
[^ve2]: Mine, Mark R. 1995. “Virtual Environment Interaction Techniques.”
[^ve3]: Youngblut, Christine, Rob E Johnston, Sarah H Nash, Ruth A Wienclaw, and CraigA Will. n.d. “REVIEW OF VIRTUAL ENVIRONMENT INTERFACE TECHNOLOGY.”
[^reschke07wallpaper]: Reschke, Michael. 2007. “800x600 Wallpaper Blue Sky.png.” Wikimedia Commons. December 27. https://commons.wikimedia.org/wiki/File:800x600_Wallpaper_Blue_Sky.png.
## Virtual Environment

Virtual environments are the technology which facilitates interactions between users and computer-generated artificial environments [^ve3].These interactive computer displays are designed to create the illusion that the user has been transported to a different location [^ve1]. In a virtual world, the user can use their senses and their body in a similar way to the real world. They can turn their head to see their surroundings, trace sounds to the direction they are coming from, and use their hands to pick up virtual objects [^ve2]. Virtual environments are thus the most natural form of interaction between humans and computers [^ve2]. 

[^ve1]: “What Are Virtual Environments? | IEEE Journals & Magazine | IEEE Xplore.” n.d. Accessed January 29, 2024. https://ieeexplore.ieee.org/abstract/document/250914.
[^ve2]: Mine, Mark R. 1995. “Virtual Environment Interaction Techniques.”
[^ve3]: Youngblut, Christine, Rob E Johnston, Sarah H Nash, Ruth A Wienclaw, and CraigA Will. n.d. “REVIEW OF VIRTUAL ENVIRONMENT INTERFACE TECHNOLOGY.”

## Virtualization

Virtualization in computing describes a technological system making it possible to reproduce several hardware structures in a machine. [^Popek&goldberg74virtualize] 
It will thus be able, on its own, to virtually recreate servers, storage systems or even computing machines.
This is to improve the user experience and obtain better returns. [^Rosenblum&garfinkel05virtualize]

[^Popek&goldberg74virtualize]: Popek, G. J., & Goldberg, R. P. (1974). *Formal requirements for virtualizable third generation architectures. Communications of the ACM,* (p412-4211)
https://www.cs.cornell.edu/courses/cs6411/2018sp/papers/popek-goldberg.pdf 

[^Rosenblum&garfinkel05virtualize]: Rosenblum, M., & Garfinkel, T. (2005). *Virtual machine monitors: current technology and future trends. Computer,* (p39-473)
https://class.ece.iastate.edu/tyagi/cpre681/papers/VMMIEEEC2005.pdf

The wikipedia page of the word virtualization.
https://en.wikipedia.org/wiki/Virtualization

ChatGPT4 to help me find references and to translate some texts.

## Wearable Technology

Wearable technology - also referred to as 'wearables' - encapsulates all wireless devices incorporated in consumers' everyday accessories and clothing. Although originally referring to items that can be worn (and sequentially, removed), new technological advancements have redefined the term to include more invasive forms of wearable technology, such as implanted microchips and smart tattoos[^ometov21wearableTech]. 

The market for wearable technology is rising exponentially as it allows the seamless incorporation of computers and electronics such as handheld mobile devices into people's lives. Common examples of such technology are tracking bracelets and smartwatches, which utilise sensors to track users' biometrics[^ferreira21wearableTech]. On top of lending improvements to people's everyday lives, they are also useful in numerous other domains, such as health care, fitness, education, finance, and gaming[^wright14wearableTech].

Wearables have developed a 'smartphone-like experience'[^ometov21wearableTech], allowing users to handle 'calls, emails, texts, and many other alerts without even getting the bulky devices out'[^ometov21wearableTech]. As they continue to evolve, industry analyst Walt Maclay argues that they will further absorb our personal lives, 'taking existing wearables such as eyeglasses, watches, hear-ing aids, and jewelry, and enhancing them with sensors'[^wright14wearableTech]. This falls in junction with new media theory; The virtualization and digitization of our reality - of our body - through wearable technology. Wearables are a prime instance of technology becoming further abstracted, blurring the lines between what is and isn't machine by incorporating it on (and in) our bodies. 


[^ferreira21wearableTech]: Ferreira, João J., Cristina I. Fernandes, Hussain G. Rammal, and Pedro M. Veiga. “Wearable Technology and Consumer Interaction: A Systematic Review and Research Agenda.” Computers in Human Behavior 118 (May 2021): 106710. https://doi.org/10.1016/j.chb.2021.106710. 

[^ometov21wearableTech]: Ometov, Aleksandr, Viktoriia Shubina, Lucie Klus, Justyna Skibińska, Salwa Saafi, Pavel Pascacio, Laura Flueratoru, et al. “A Survey on Wearable Technology: History, State-of-the-Art and Current Challenges.” Computer Networks 193 (July 2021): 108074. https://doi.org/10.1016/j.comnet.2021.108074. 

[^wright14wearableTech]: Wright, Robin, and Latrina Keith. “Wearable Technology: If the Tech Fits, Wear It.” Journal of Electronic Resources in Medical Libraries 11, no. 4 (October 2, 2014): 204–16. https://doi.org/10.1080/15424065.2014.969051. 

## Wiki


Wikis are web-based, collaborative software that enables people to modify content by directly editing pages online.[^ebersbach05wiki] In educational contexts, they facilitate student engagement in a collaborative learning environment.[^parker07wiki]

The term "Wiki Wiki Web" was inspired by the "Wiki Wiki Shuttle" at Honolulu International Airport, as named by Ward Cunningham.[^anderson10wiki] In Hawaiian, "Wiki" means "quick" or "fast."

Wikis differ from traditional websites in that they are collaborative platforms that allow multiple users to create, edit, and organize content. Unlike traditional websites, wikis enable easy navigation between pages through interlinking and often have features such as revision history and discussion pages to track changes and facilitate communication among users. Wikis are commonly used for knowledge management, project collaboration, and intranet applications, and they can be utilized to display information, store corporate records, or serve as knowledge bases for various subjects. While traditional websites are typically front-end oriented, wikis act as a hybrid between an information system and an information displayer, allowing for quick and easy content creation and updates by users with minimal technical skills.[^hester09analysis]


There are numerous platforms for running wikis. Among the most popular are  [MediaWiki](https://www.mediawiki.org/), [DokuWiki](https://www.dokuwiki.org/dokuwiki), and [GitHub](../main/glossary.md#GitHub).

[^anderson10wiki]: Anderson, Melanie O., and Jon R. Serra. 2010. “Is that a Wiki in Your Classroom?.” In *Proceedings of the 2010 Association of Small Computers Users in Education (ASCUE) Conference*.

[^ebersbach05wiki]: Ebersbach, Anja, Markus Glaser, and Richard Heigl. 2005. “The Wiki Concept.” In *Wiki - Web Collaboration*, 1-24. Berlin: Springer.

[^parker07wiki]: Parker, Kevin, and Joseph Chao. 2007. “Wiki as a Teaching Tool.” *Interdisciplinary Journal of E-Learning and Learning Objects* 3 (1): 57–72.

[^hester09analysis]: Hester, Andrea J. 2009. Analysis of factors influencing adoption and usage of knowledge management systems and investigation of wiki technology as an innovative alternative to traditional systems. PhD diss., University of Colorado at Denver.

