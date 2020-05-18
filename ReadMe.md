# fs-write #

Just a quick test to see if we can write something (in this case a string, in
my real life use-case an environment variable) to the Heroku dyno filesystem on
startup.

Why?

Because things like
[Google Cloud PubSub](https://www.npmjs.com/package/@google-cloud/pubsub)
**requires** you to have your credentials on disk (at `google-creds.json`), and
you can't pass them in to the client instantiation. This is pretty bad, so we
have to work around it in Heroku.

## License ##

MIT.

(Ends)



