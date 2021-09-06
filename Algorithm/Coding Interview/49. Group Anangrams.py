import collections


def solution(strs):
    anagrams = collections.defaultdict(list)

    for word in strs:
        anagrams[''.join(sorted(word))].append(word)

    return list(anagrams.values())


strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
print(solution(strs))
