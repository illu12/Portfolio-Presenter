
# os
FROM ubuntu:latest
RUN apt-get update -y

# code sdk
FROM node:16.14

# current dir
WORKDIR /app

# leverage caching, if things hasn't changed, this isn't executed
COPY package*.json ./

# install things
RUN npm install --force

# copy rest of source
COPY . .


# build things
RUN npm run build

# expose port
EXPOSE $PORT

# run it uuuup
CMD npx serve -s build -p $PORT