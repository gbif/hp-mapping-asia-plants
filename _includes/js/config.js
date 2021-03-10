var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  rootPredicate: {
    "type": "and",
    "predicates": [
       { type: 'equals', key: 'taxonKey', value: 6 },
   		{
        "type":"in",
        "key": "countryCode",
        "values": ["BN", "KH", "ID", "LA", "MY", "MM", "PH", "SG", "TH", "VN"]
      },
      {
        "type": "equals",
        "key": "notIssues",
        "value": "COUNTRY_COORDINATE_MISMATCH"
      }
    ]
  }
};
