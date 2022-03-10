# API Client

This package defines two layers of API clients. One layer is utilized in the front-end / interface, and is generally injected at runtime into that layer. The other defines the underlying API clients that connect this application to other services in the GeneDX ecosystem.

## src/client/api

Anything in here is meant for consumption in the front-end. The API package is driven mostly by fetch calls, vs. anything heavier weight (such as axios). Everything in here consumes a Next.js API route from the application itself.

## src/client/services

Things in here (established by a factory in `create-service-clients.ts`) are used on the server-side, and generally they _power_ the routes defined in `pages/api`.
