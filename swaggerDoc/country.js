/**
* @swagger
* /country/search/{searchValue}:
*  get:
*      tags:
*          - Country service
*      summary: Country Search API
*      description: This API will send the list of countries matching the search
*      parameters:
*          - name: searchValue
*            in: path
*            type: string
*            required: true
*            description: Pass the country name to be searched for, e.g sg
*            schema:
*               type: string
*      responses:
*          '200':
*              description: Success response
*              content:
*                  application/json:
*                      schema:
*                          $ref: '#/components/schemas/countrySearchResponse'
*                      example:
*                          _id: "65d6ce26cfca75e1b7f231ea"
*                          name: "Singapore"
*                          country_code: "SG"
*                          description: ""
*          '400':
*              description: Country not found
*          '401':
*              description: Unauthorized
*          '500':
*              description: Internal server error
* components:
*  schemas:
*      countrySearchResponse:
*          type: object
*          properties:
*              _id:
*                  type: string
*              name:
*                  type: string
*              country_code:
*                  type: string
*              description:
*                  type: string
*/