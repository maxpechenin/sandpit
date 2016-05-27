[
    {
        "suggestdata": {
            "took": 1,
            "timed_out": false,
            "_shards": {
                "total": 5,
                "successful": 5,
                "failed": 0
            },
            "hits": {
                "total": 20,
                "max_score": 0,
                "hits": []
            },
            "aggregations": {
                "top_matters": {
                    "doc_count_error_upper_bound": 0,
                    "sum_other_doc_count": 0,
                    "buckets": [
                      {
                          "key": "matterclient",
                          "doc_count": 9,
                          "score": {
                              "value": 8.776073455810547
                          },
                          "view": {
                              "hits": {
                                  "total": 9,
                                  "max_score": 8.776073,
                                  "hits": [
                                    {
                                        "_index": "matter_client_contact",
                                        "_type": "matterclient",
                                        "_id": "95227",
                                        "_score": 8.776073,
                                        "_source": {
                                            "name": "Test"
                                        },
                                        "highlight": {
                                            "name": [
                                              "<em>Test</em>"
                                            ]
                                        }
                                    },
                                    {
                                        "_index": "matter_client_contact",
                                        "_type": "matterclient",
                                        "_id": "40797",
                                        "_score": 5.7977457,
                                        "_source": {
                                            "name": "Test Client"
                                        },
                                        "highlight": {
                                            "name": [
                                              "<em>Test</em> Client"
                                            ]
                                        }
                                    },
                                    {
                                        "_index": "matter_client_contact",
                                        "_type": "matterclient",
                                        "_id": "83257",
                                        "_score": 5.0173593,
                                        "_source": {
                                            "name": "Gee's Test Client2"
                                        },
                                        "highlight": {
                                            "name": [
                                              "Gee's <em>Test</em> Client2"
                                            ]
                                        }
                                    },
                                    {
                                        "_index": "matter_client_contact",
                                        "_type": "matterclient",
                                        "_id": "83256",
                                        "_score": 4.63737,
                                        "_source": {
                                            "name": "Gee's Test Client"
                                        },
                                        "highlight": {
                                            "name": [
                                              "Gee's <em>Test</em> Client"
                                            ]
                                        }
                                    },
                                    {
                                        "_index": "matter_client_contact",
                                        "_type": "matterclient",
                                        "_id": "83260",
                                        "_score": 4.63737,
                                        "_source": {
                                            "name": "Gee's Test Client4"
                                        },
                                        "highlight": {
                                            "name": [
                                              "Gee's <em>Test</em> Client4"
                                            ]
                                        }
                                    }
                                  ]
                              }
                          }
                      },
                      {
                          "key": "matter",
                          "doc_count": 4,
                          "score": {
                              "value": 8.762273788452148
                          },
                          "view": {
                              "hits": {
                                  "total": 4,
                                  "max_score": 8.762274,
                                  "hits": [
                                    {
                                        "_index": "matter_client_contact",
                                        "_type": "matter",
                                        "_id": "462791",
                                        "_score": 8.762274,
                                        "_source": {
                                            "clientname": "Foxtel Management Pty Ltd",
                                            "mattername": "Test"
                                        },
                                        "highlight": {
                                            "mattername": [
                                              "<em>Test</em>"
                                            ]
                                        }
                                    },
                                    {
                                        "_index": "matter_client_contact",
                                        "_type": "matter",
                                        "_id": "548390",
                                        "_score": 4.390216,
                                        "_source": {
                                            "clientname": "Sagittarius IP",
                                            "mattername": "Diagnostic test for bacterial pathogens"
                                        },
                                        "highlight": {
                                            "mattername": [
                                              "Diagnostic <em>test</em> for bacterial pathogens"
                                            ]
                                        }
                                    },
                                    {
                                        "_index": "matter_client_contact",
                                        "_type": "matter",
                                        "_id": "548391",
                                        "_score": 3.6699817,
                                        "_source": {
                                            "clientname": "Sagittarius IP",
                                            "mattername": "Diagnostic test for bacterial pathogens"
                                        },
                                        "highlight": {
                                            "mattername": [
                                              "Diagnostic <em>test</em> for bacterial pathogens"
                                            ]
                                        }
                                    },
                                    {
                                        "_index": "matter_client_contact",
                                        "_type": "matter",
                                        "_id": "326401",
                                        "_score": 3.2864685,
                                        "_source": {
                                            "clientname": "Cricket Australia",
                                            "mattername": "Opposition to TEST SERIES Trade Mark App"
                                        },
                                        "highlight": {
                                            "mattername": [
                                              "Opposition to <em>TEST</em> SERIES Trade Mark App"
                                            ]
                                        }
                                    }
                                  ]
                              }
                          }
                      },
                      {
                          "key": "mattercontact",
                          "doc_count": 7,
                          "score": {
                              "value": 4.058422088623047
                          },
                          "view": {
                              "hits": {
                                  "total": 7,
                                  "max_score": 4.058422,
                                  "hits": [
                                    {
                                        "_index": "matter_client_contact",
                                        "_type": "mattercontact",
                                        "_id": "120598183",
                                        "_score": 4.058422,
                                        "_source": {
                                            "matter_name": "Aleks Client and Matter Test",
                                            "name": "Apricot, Tate"
                                        },
                                        "highlight": {
                                            "matter_name": [
                                              "Aleks Client and Matter <em>Test</em>"
                                            ]
                                        }
                                    },
                                    {
                                        "_index": "matter_client_contact",
                                        "_type": "mattercontact",
                                        "_id": "120453515",
                                        "_score": 4.058422,
                                        "_source": {
                                            "matter_name": "Diagnostic test for bacterial pathogens",
                                            "name": "Gibson, Mark"
                                        },
                                        "highlight": {
                                            "matter_name": [
                                              "Diagnostic <em>test</em> for bacterial pathogens"
                                            ]
                                        }
                                    },
                                    {
                                        "_index": "matter_client_contact",
                                        "_type": "mattercontact",
                                        "_id": "120453508",
                                        "_score": 3.8395321,
                                        "_source": {
                                            "matter_name": "Diagnostic test for bacterial pathogens",
                                            "name": "Gibson, Mark"
                                        },
                                        "highlight": {
                                            "matter_name": [
                                              "Diagnostic <em>test</em> for bacterial pathogens"
                                            ]
                                        }
                                    },
                                    {
                                        "_index": "matter_client_contact",
                                        "_type": "mattercontact",
                                        "_id": "120598352",
                                        "_score": 3.7630196,
                                        "_source": {
                                            "matter_name": "Test 1 change payor after DNC",
                                            "name": "Fiocco Wood, Simon"
                                        },
                                        "highlight": {
                                            "matter_name": [
                                              "<em>Test</em> 1 change payor after DNC"
                                            ]
                                        }
                                    },
                                    {
                                        "_index": "matter_client_contact",
                                        "_type": "mattercontact",
                                        "_id": "120598313",
                                        "_score": 3.2910275,
                                        "_source": {
                                            "matter_name": "Test 3 matter changed and party added",
                                            "name": "Abrahams, Michelle"
                                        },
                                        "highlight": {
                                            "matter_name": [
                                              "<em>Test</em> 3 matter changed and party added"
                                            ]
                                        }
                                    }
                                  ]
                              }
                          }
                      }
                    ]
                }
            }
        }
    }
]