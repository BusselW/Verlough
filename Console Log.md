# This file
Under the dashed line, a 'Y:' or 'X:' will be written. Here's how to deal with that parameter:

1. If there's an Y:
That means you do not have to read whatever comes after or on the next line of the 'Y:'. It implies there was a console log error before which you handled and can therefore disregard as it's already handled.

2. If there's an X:
This means we have an unresolved console log error. You must first handle the error before handling the request. When the error is resolved, you can proceed by handling the request.

------------------------------------------------
Y: Nothing