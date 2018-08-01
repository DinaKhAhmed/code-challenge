# code challenge
this is code challenge from
[Boris Cosic](https://gitlab.com/boriscosic/code-challenge-1/).

it was a challenging task for me, as this is the first time to work with NodeJS,

I have used typescript instead of Javascript and it gets compiled to es6.

## Note :

I'll  really appreciate if you give me a precise feedback and comments, as I want to know what can be enhanced apart from the challenge itself.


### Done points :

- [x] `$ node store.js add mykey myvalue` 

- [x] `$ node store.js list`

- [x] `$ node store.js get mykey`

- [x] `$ node store.js remove mykey`

- [x] `$ node store.js clear`

- [x] ` Instead of running `node store.js ` alter the runtime so it can be run as `./store`. (all what I was able to do is to create a new script command in package.json call "store", I'm not sure if this is what you wanted or not)

- [x] ` Add ability to deploy in Docker container ` (I have created docker and dockerignore files, but I am still  going through docker installation steps for windows and trying to understand it more, [this was my refrence](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)).

- [x] ` Add GitLab compatible CI/CD to perform a server deploy.` (I have created [CI file](.gitlab-ci.yml))

