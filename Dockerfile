FROM gcr.io/google_appengine/nodejs

# Install node.js 6.6.0
RUN install_node v6.6.0

# Copy application code.
COPY . /app/

# Install dependencies.
RUN npm --unsafe-perm install

CMD npm start
