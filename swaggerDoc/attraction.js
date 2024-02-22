/**
* @swagger
* /attraction/{country_id}:
*  get:
*      tags:
*          - Attraction service
*      summary: Attractions fetch API
*      description: This API will send the list of attractions in the given country
*      parameters:
*          - name: country_id
*            in: path
*            type: string
*            required: true
*            description: Pass the country id to get its attractions, e.g 65d6ce26cfca75e1b7f231ea
*            schema:
*               type: string
*      responses:
*          '200':
*              description: Success response
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/attractionFetchResponse'
*                      example:
*                          _id: "65d6ea55ab17f7548ba6bc42"
*                          country_id: "65d6ce26cfca75e1b7f231ea"
*                          title: "Eat.Stay.Love"
*                          description: "An all-in-one 6Experience at Fratelli Vineyards awaits when you book a flight to Pune"
*                          image: "https://www.flydubai.com/en/media/India_Summary_tcm8-33227_w710.jpg"
*          '400':
*              description: Country not found
*          '401':
*              description: Unauthorized
*          '500':
*              description: Internal server error
* components:
*  schemas:
*      attractionFetchResponse:
*          type: object
*          properties:
*              _id:
*                  type: string
*              country_id:
*                  type: string
*              title:
*                  type: string
*              description:
*                  type: string
*              image:
*                  type: string
*/