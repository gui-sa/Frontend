# Node is basis for REACT
FROM node:current-alpine
 
# Go to director app in node - container
WORKDIR /app

# Copy the blueprint for aplication... modules
COPY package*.json .

# Install the modules
RUN npm install

# Copy your directory to the container
COPY . .

#Run it.
CMD [ "npm", "start" ]