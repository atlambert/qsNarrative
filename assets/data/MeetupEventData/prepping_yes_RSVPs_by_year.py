import csv

list2008 = []
list2009 = []
list2010 = []
list2011 = []
list2012 = []
list2013 = []
list2014 = []
list2015 = []

with open('yesRSVPs_by_year.csv', 'rU') as csvfile:
	reader = csv.reader(csvfile, delimiter=',', quotechar='\n')
	for row in reader:
		# print ', '.join(row)
		#print row

		# print (row[0], 2015)

		if row[0] == "2008":
			# print "omg 2008,",row[1]
			list2008.append(row[1])
		elif row[0] == "2009":
			list2009.append(row[1])
		elif row[0] == "2010":
			list2010.append(row[1])
		elif row[0] == "2011":
			list2011.append(row[1])
		elif row[0] == "2012":
			list2012.append(row[1])
		elif row[0] == "2013":
			list2013.append(row[1])
		elif row[0] == "2014":
			list2014.append(row[1])
		elif row[0] == "2015":
			list2015.append(row[1])


print list2008
print list2009
print list2010
print list2011
print list2012
print list2013
print list2014
print list2015