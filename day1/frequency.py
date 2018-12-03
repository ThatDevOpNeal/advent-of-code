inputFile = open("input.txt", "r")
lines = inputFile.read().split("\n")
currentFrequency = 0
for frequency in lines:
	currentFrequency += int(frequency)
print(currentFrequency)
