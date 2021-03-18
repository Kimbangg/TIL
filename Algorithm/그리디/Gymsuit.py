def solution(n, lost, reserve):
    #중복 값 없이, 여분과 분실량을 만든다.
    set_lost = set(lost) - set(reserve)
    set_reserve = set(reserve) - set(lost)
    # 여분 옷을 소지한 사람들 앞 또는 뒤에서 분실자가 있으면 제거한다.
    for i in set_reserve:
        if i-1 in set_lost:
            set_lost.remove(i-1)
        elif i+1 in set_lost:
            set_lost.remove(i+1)
        # 여분 옷을 받은 사람을 제외한, 진짜 분실자를 전체 인원에서 감한다
        return n - len(set_lost)