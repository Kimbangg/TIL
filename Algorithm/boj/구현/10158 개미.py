w, (h = map(int, input().split()));
p, (q = map(int, input().split()));
t = int(input());
print(w - abs(w - ((p + t) % (2 * w))), h - abs(h - ((q + t) % (2 * h))));
