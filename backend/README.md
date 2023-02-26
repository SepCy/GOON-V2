# Welcome to GOON!
<p  align="center">
<img  src="https://avatars.githubusercontent.com/u/116578301?s=200&v=4"  width="100"  alt="Goon"  /></p>
Hi! 
This is your starting place to build GOON on your own server and join our GOON Community

An open-source platform designed to bridge the digital divide between rural and urban communities in Cameroon by providing offline digital services to community members.

# Community
join our community and fill free to contribute to our open-source solution
our discord : 

# Getting Started

### Requirements

You need to install  `docker`  and  `docker-compose`  [install](https://docs.docker.com/engine/install/ "https://docs.docker.com/engine/install/")  in order to start the API server.

### Installing the project

Clone this repository. 	
```bash

git clone https://github.com/SepCy/GOON-v.2.git

```

### Create docket network

```bash

docker network create web internal

```

### Start the docker containers.
before running docker, you need to choose the service amongs all available

```bash

cd traefik

```

```bash

docker-compose up -d

```
## And move to the next service.
#
## Documentation about Port & Domain name

The docker compose is already setup to provide a specific domain name.

Here you can see what ports are being used:


- ### Port=7500 | Elearning Wikipedia Module |

- ### http://goon.localhost | Fronted Web | all service alvailble here |

- ### hostname http://kolibri.localhost | [kolibri](https://learningequality.org/kolibri/) to provide offline educational sources like Wikipedia. |

- ### Port=9080| Blog API | Writing posts, adding videos, aggregating local news from reliable news sources. |

- ### Survey API | Survey forms for needs analysis and evaluation across different projects. |

- ### Port=3000| http://message.localhost** | Chat API | Where users should be able to exchange texts, voice messages, pdf files, audio files, and images. |
- ### | http://ludo.localhost | Ludo is a strategy board game for two to four players, in which the players race their four tokens from start to finish according to the rolls of a single die.

- ### http://coding.localhost | Scratch is a high-level block-based visual programming language and website aimed primarily at children as an educational tool for programming, with a target audience of ages 8 to 16.

- ### http://radio.localhost | AzuraCast is a free and open-source, self-hosted web radio management suite.
.

Note: Ports are exposed only for testing purpose. In a production environment, only the gateway port is exposed.


