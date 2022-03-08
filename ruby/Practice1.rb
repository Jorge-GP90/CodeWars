def enough(cap, on, wait)
    ava = cap - (on + wait)
    full = ava.abs
    cap > (on + wait) ? "The bus has availability with #{ava}  of passangers" : "The Bus is full, he can not take  #{full} passangers"
end  
enough(10, 5, 5)

def enough(cap, on, wait)
    ava = cap - (on + wait)
    full = ava.abs
    if ava > 0
        puts "The bus has availability with #{ava}  of passangers" 
    elsif ava = 0
        puts "the bus is full"
    else
        puts "The Bus is full, he can not take  #{full} passangers"
end
enough(10, 5, 5)