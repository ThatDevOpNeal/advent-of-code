inputFile = open("input.txt", "r")
lines = inputFile.read().split("\n")
currentFrequency = 0
frequencyResultList = [0]
firstDuplicateFrequency = None
while firstDuplicateFrequency == None:
	for frequency in lines:
		currentFrequency += int(frequency)
		if currentFrequency in frequencyResultList:
			firstDuplicateFrequency = currentFrequency
			break
		frequencyResultList.append(currentFrequency)
print(firstDuplicateFrequency)