#include <unordered_set>
#include <iostream>
#include <string>
#include <algorithm>

void unordered_set_basic()
{
    std::unordered_set<std::string> s;

    // Insert
    s.insert("abcde");
    s.insert("xxxx");
    s.insert("yyyy");

    // Check existance 1: use count
    if (s.count("abcde"))
    {
        std::cout << "abcde exists" << std::endl;
    }

    // Check existance 2: use find
    if (s.find("abcde") != s.end())
    {
        std::cout << "abcde exists" << std::endl;
    }

    // Removing element by value
    s.erase("abcde");

    // Removing element by iterator
    auto it = s.find("xxxx");
    if (it != s.end())
    {
        s.erase(it);
        // The iterator is invalidated after erase
    }

    // Iterate 1: by iterator
    for (auto it = s.begin(); it != s.end(); ++it)
    {
        std::cout << *it << std::endl;
    }

    // Iterate 2: by range-based for loop
    for (const auto &e : s)
    {
        std::cout << e << std::endl;
    }

    // Iterate 3: by for_each
    std::for_each(s.begin(), s.end(), [](const std::string &e)
                  { std::cout << e << std::endl; });
}

void unordered_set_customized_hash()
{
    // Suppose we need to store a self-defined struct in unordered_set
    struct MyStruct
    {
        int a;
        int b;
    };

    // Customized hash for hashing
    struct MyHash
    {
        std::size_t operator()(const MyStruct &s) const
        {
            return std::hash<int>()(s.a) ^ std::hash<int>()(s.b);
        }
    };

    // Customized equal for check equality
    struct MyEqual
    {
        bool operator()(const MyStruct &s1, const MyStruct &s2) const
        {
            return s1.a == s2.a && s1.b == s2.b;
        }
    };
}