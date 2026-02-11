{
  "models": {
    "Group": {
      "name": "String (required, unique)",
      "genre": "String (required)",
      "description": "String"
    },
    "Vinyl": {
      "title": "String (required)",
      "group": "ObjectId (ref: Group, required)",
      "releaseDate": "Number (min: 0, required)",
      "condition": "String (enum: ['neuf', 'bon', 'usé'], required)",
      "price": "Number (min: 0, required)",
      "stock": "Number (default: 0)"
    }
  }
}