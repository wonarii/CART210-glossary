## DNS
The Domain Name System is a system that matches the name in the URL to the IP address of the sites we are looking for on the Internet. This makes it easier for us to naviagte to our favorite websites rather than remembering their IP addresses.[^couldflare24what] The DNS provides the corresponding IP address to the domain name for browsers to find the page we are searching for.

![DNS](images/dns-chan.jpg)

### Domain Namespace
#### Search structure
The DNS is a database that contains information on namespaces and provides the browser with the appropriate information from internet hosts to allow the navigator to reach the right places. It uses the domain namespace, a collection of all the domain names existing on the internet, to perform the search. This system is built on an inverted tree diagram where the initial point splits into several segments that also divide into more subsegments. As the search reaches lower into the tree, the more specific the namespace becomes.[^google06dnsbind]

<img src="https://www.oreilly.com/api/v2/epubs/0596005628/files/httpatomoreillycomsourceoreillyimages137590.png" width="600px" height="auto" alt="Diagram of the struture of the doamin namespace">

#### Top seven domains that divide the Internet domain namespace
Originally, there were seven top-level domains that reflected the nature of the organization behind the website.
- **.com** : Commercial use.
- **.edu** : Educational organizations.
- **.gov** : Government websites.
- **.mil** : Military websites.
- **.net** : For NSFNET and UUNET, and commercial use after 1996.
- **.org** : Noncommercial organizations (before 1996).
- **.int** : International organizations.

Later, other domains were added with the expansion of the Internet.[^google06dnsbind]

[^couldflare24what]: CloudFlare. 2024. "What is DNS? | How DNS works." Accessed January 25, 2024. https://www.cloudflare.com/learning/dns/what-is-dns/.
[^acm01dns]: Jung, Jaeyeon, Sit, Emil, Balakrishnan, Hari and Morris, Robert. 2001. "DNS Performance and the Effectiveness of Caching: Proceedings of the 1st ACM SIGCOMM Workshop on Internet Measurement." ACM Conferences. Accessed February 26, 2024. https://dl.acm.org/doi/epdf/10.1145/505202.505223.
[^google06dnsbind]: Liu, Cricket, and Albitz, Paul. 2006. "How Does DNS Work?" DNS and Bind, 11-34. Google Books. Accessed February 26, 2024. https://books.google.ca/books?hl=en&lr=&id=u0GbAgAAQBAJ&oi=fnd&pg=PT4&dq=DNS&ots=6-v2uEt-Oy&sig=wV_8GvQVJJORsEiKSgDny91vV3A#v=onepage&q&f=false. 
