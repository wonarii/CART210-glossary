## HTTPS

HTTPS is an extension of the HTTP but is more secure as it incorporates encryption, authentication, and integrity checks. It provides a secure method for transmitting data between a web server and a web browser by using encryption technology like SSL or TLS. It operates on a request-response model, it sends a request and awaits the server’s response.[^WhatIsHTTPS24]
HTTPS safeguards users against any malicious activities such as eavesdroppers and man-in-the-middle attacks. It is relatively easy to impersonate, modify or monitor an HTTP connection since any information is sent as a plain text. Therefore, using HTTPS is more secure and ensure that no attacks can temper with the exchanged information.[^HypertextTransferProtocolSecure22]

### HTTPS Cryptographic protocols

#### Secure Sockets Layer (SSL)
SSL is the predecessor to the modern encryption, TLS. It was developed by Netscape in 1995[^CloudflareWhatIsSSL24] for ensuring the identity and authentication of a website, enabling a secure HTTP session between the client and the server. However, since SSL 3.0,  developed in 1996, several vulnerabilities have been identified, rendering it unsafe for use. Consequently, most browsers no longer support this protocol.

#### Transport Layer Security (TLS)
TLS is the successor of SSL and ensures privacy, authenticity and data security while exchanging data over the internet. The key difference between SSL and TLS lies in the handshake process, where a browser authenticates a server’s SSL or TLS certificate. SSL handshake involves an explicit connection and has more steps, while TLS is an implicit one, making it faster.[^AWSDifferenceBetweenSSL]

The term SSL and SSL/TLS both refer to the TLS protocol and certificates, as all version of SSL are now deprecated.

HTTPS contributes to a better overall user experience by providing faster loading times, especially on modern web browsers and prioritize secure connections. Additionally, search engines prioritize websites that use HTTPS in their search results. [^LinkedInHTTPSSEO24] It plays an important role in facilitating secure communication and interaction across various platform, including social media, streaming service and many more website. It does integrate an safety wall for the users navigating the web.

[^WhatIsHTTPS24]:	Tushar, Pol. 2024. “What is HTTPS?”.  Accessed January 27. https://www.semrush.com/blog/what-is-https/

[^HypertextTransferProtocolSecure22]:	Rahul Awati. 2022. “Hypertext Transfer Protocol Secure (HTTPS)”. Accessed January 27. https://www.techtarget.com/searchsoftwarequality/definition/HTTPS

[^CloudflareWhatIsSSL24]:	Cloudflare. 2024. “What is SSL | SSL definition”. Accessed January 27.  https://www.cloudflare.com/learning/ssl/what-is-ssl/

[^AWSDifferenceBetweenSSL&TLS24]:	 AWS. 2024. “What’s the Difference Between SSL and TLS?”. Accessed January 27. https://aws.amazon.com/compare/the-difference-between-ssl-and-tls/#:~:text=SSL%20is%20technology%20your%20applications,that%20fixes%20existing%20SSL%20vulnerabilities.

[^LinkedInHTTPSSEO24]: LinkedIn. 2024. "Why does HTTPS matter for SEO?". Accessed January 28. https://www.linkedin.com/advice/0/why-https-important-seo-skills-search-engines-ixwyc#:~:text=HTTPS%20is%20crucial%20for%20SEO,in%20search%20engine%20results%20pages.
