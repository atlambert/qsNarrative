from __future__ import unicode_literals

import requests
import json
import time
import codecs
import sys
UTF8Writer = codecs.getwriter('utf8')
sys.stdout = UTF8Writer(sys.stdout)

def main():

        # problem: if the meetup doesn't exist anymore, then it fucks up the script
        qsMeetupsList = [ "quantifiedself" , "QSXX-Quantified-Self-Womens-Meetup" , "QuantifiedSelfSD", "Quantified-Self-Seattle" , "QuantifiedSelfLA", "PDX-Quantified-Self", "Southern-Oregon-Quantified-Self", "Quantified-Self-Honolulu", "Berkeley-QS" , "Quantified-Self-Santa-Barbara", "Davis-Sacramento-Quantified-Self", "qsboulderdenver", "San-Francisco-Quantified-Self", "Reno-Quantified-Self", "Phoenix-Scottsdale-Quantified-Self", "QuantifiedSelfOC", "NYQuantifiedSelf" , "bostonQS", "QSXX-NYC-Quantified-Self-Womens-Meetup-New-York-City", "QSXX-Quantified-Self-Womens-Meetup-Boston", "DC-Quantified-Self", "ChicagoQuantifiedSelf", "QS-STL", "The-Pittsburgh-Quantified-Self-Meetup-Group", "Philadelphia-Self-Quantifiers", "Houston-Quantified-Self", "Quantified-Self-Austin", "DFW-Quantified-Self-Meetup-Group", "qsatlanta", "Quantified-Self-Lansing-MI", "Quantified-Self-Ann-Arbor", "Quantified-Self-Metro-Detroit", "Indianapolis-Quantified-Self-Meetup-Group", "QSSWFLA", "Quantified-Self-Grand-Rapids", "Quantified-Self-Self-Knowledge-Through-Numbers", "The-Columbus-Quantified-Self-Meetup-Group", "Quantified-Self-Lincoln","SydneyQS","The-Melbourne-Quantified-Self-Meetup-Group","Auckland-Quantified-Self-Meetup-Group","The-Mexico-City-Quantified-Self-meetup","QS-Rio","QSBuenosAires","Quantified-Self-Bogota","quantifiedself-toronto","Quantified-Self-Montreal","quantifiedself-ottawa","qsamsterdam","LondonQS","The-Lille-Quantified-Self-Meetup","QSParis","MancQS","Cambridge-Quantified-Self","Quantified-Self-Oxford","Quantified-Self-Leeds-York-Harrogate", "Quantified-Self-Show-Tell-Brussels","Quantified-Self-Belfast-Meetup","Quantified-Self-Dublin","QSelf-Porto-Quantified-Self-group-Porto-Portugal","QS-MUC","QS-Berlin","Quantified-Self-Hamburg","qs-aachen","Quantified-Self-Geneva","BudapestQS","Bucharest-Quantified-Self-Meetup","QS-Stockholm","Quantified-Self-Copenhagen","Quantified-Self-Torino-Turin-Italy","Quantified-Self-Barcelona","Quantified-self-Madrid","QS-Stuttgart","QS-Koeln","QSGroningen","The-Athens-Quantified-Self-Meetup","Quantified-Self-Zurich","Quantified-Self-Ruhrgebiet","Oslo-Quantified-Self-and-Lifelogging-Group","Ljubljana-Quantified-Self-Meetup","QuantifiedSelfWarsaw","Quantified-Self-Tokyo","QSbeirut","SingaporeQS", "quantified-self-bangkok", "qs-taiwan", "Quantified-Self-Shanghai-Meetup", "QSMumbai", ]
        api_key= "5277350233c44267e555d6a4b637937"
        # Get your key here https://secure.meetup.com/meetup_api/key/
        for groupUrlName in qsMeetupsList:
            per_page = 200
            results_we_got = per_page
            offset = 0
            while (results_we_got == per_page):
                # Meetup.com documentation here: http://www.meetup.com/meetup_api/docs/2/groups/
                # response=get_results({"sign":"true", "group_urlname":groupUrlName, "key":api_key, "page":per_page, "offset":offset })

                response=get_results({"sign":"true", "group_urlname":groupUrlName, "key":api_key, "page":per_page, "offset":offset, "status":"past" })
                
                time.sleep(1)
                offset += 1
                results_we_got = response['meta']['count']

                ######
                # TO FIGURE OUT: when i print the statement below, response['results'] represents only the latest event.
                # HOW DO I GET MORE EVENTS???
                #######

                #print "this=",response['results'],"\n\n"

                for group in response['results']:
                    category = ""
                    if "category" in group:
                        category = group['category']['name']
                    # print "," .join(map(unicode, [city, group['name'].replace(","," "), group['created'], group['city'],group.get('state',""),category,group['members'], group.get('who',"").replace(","," ")]))
                    print "," .join(map(unicode, [ g roupUrlName, group['created'], group['yes_rsvp_count'], group['name'].replace(","," "), group['event_url'], group['group'] ] )) # group['description'],


            time.sleep(1)


def get_results(params):

    request = requests.get("http://api.meetup.com/2/events", params=params)
    data = request.json()

    #print "request="request

    #print request.json()
    return data


if __name__=="__main__":
        main()


## Run this script and send it into a csv:
## python meetup-pages-names-dates.py > meetup_groups.csv