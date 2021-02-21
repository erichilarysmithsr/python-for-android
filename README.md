---
description: Epidemic Seasons 1 - 9
---

# Quality of Life Games

{% api-method method="get" host="https://qualityoflifegames.apiary.io" path="/v1/epidemicseasons/:PlaceidNeighborhood" %}
{% api-method-summary %}
Get Epidemic Seasons Message Streams
{% endapi-method-summary %}

{% api-method-description %}
This endpoint allows you to connect to HTTP Postmark Quality of Life Message Stream
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="id" type="object" %}
BlueNeighborhood
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}

{% api-method-headers %}
{% api-method-parameter name="Authentication" type="integer" required=true %}
Token Bearer
{% endapi-method-parameter %}
{% endapi-method-headers %}

{% api-method-query-parameters %}
{% api-method-parameter name="purpleNeighborhood" type="string" required=false %}
PurpleNeighborhood
{% endapi-method-parameter %}

{% api-method-parameter name="orangeNeighborhood" type="string" required=false %}
OrangeNeighborhood
{% endapi-method-parameter %}

{% api-method-parameter name="greenNeighborhood" type="string" required=false %}
GreenNeighborhood
{% endapi-method-parameter %}

{% api-method-parameter name="yellowNeighborhood" type="string" required=false %}
YellowNeighborhood
{% endapi-method-parameter %}

{% api-method-parameter name="blueNeighborhood" type="string" %}
BlueNeighborhood
{% endapi-method-parameter %}

{% api-method-parameter name="redNeighborhood" type="string" %}
RedNeighborhood
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
Cake successfully retrieved.
{% endapi-method-response-example-description %}

```
{    "name": "Cake's name",    "recipe": "Cake's recipe name",    "cake": "Binary cake"}
```
{% endapi-method-response-example %}

{% api-method-response-example httpCode=404 %}
{% api-method-response-example-description %}
Could not find a cake matching this query.
{% endapi-method-response-example-description %}

```
{    "message": "Ain't no cake like that."}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}



