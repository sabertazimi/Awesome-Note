"use strict";(self.webpackChunkawesome_notes=self.webpackChunkawesome_notes||[]).push([[5928],{6004:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"Language/Go/GoBasicNotes","title":"Go Basic Notes","description":"CLI","source":"@site/notes/Language/Go/GoBasicNotes.md","sourceDirName":"Language/Go","slug":"/Language/Go/GoBasicNotes","permalink":"/awesome-notes/Language/Go/GoBasicNotes","draft":false,"unlisted":false,"editUrl":"https://github.com/sabertazimi/awesome-notes/edit/main/notes/Language/Go/GoBasicNotes.md","tags":[{"inline":true,"label":"Language","permalink":"/awesome-notes/tags/language"},{"inline":true,"label":"Go","permalink":"/awesome-notes/tags/go"}],"version":"current","lastUpdatedBy":"sabertazimi","lastUpdatedAt":1712724461000,"frontMatter":{"author":"Sabertazimi","authorTitle":"Web Developer","authorURL":"https://github.com/sabertazimi","authorImageURL":"https://github.com/sabertazimi.png","tags":["Language","Go"]},"sidebar":"tutorialSidebar","previous":{"title":"C++ Basic Notes","permalink":"/awesome-notes/Language/CPP/CPPBasicNotes"},"next":{"title":"Haskell Basic Notes","permalink":"/awesome-notes/Language/Haskell/HaskellBasicNotes"}}');var i=l(5105),r=l(842);const s={author:"Sabertazimi",authorTitle:"Web Developer",authorURL:"https://github.com/sabertazimi",authorImageURL:"https://github.com/sabertazimi.png",tags:["Language","Go"]},t="Go Basic Notes",c={},o=[{value:"CLI",id:"cli",level:2},{value:"Installation",id:"installation",level:3},{value:"Basic Command",id:"basic-command",level:3},{value:"Build",id:"build",level:4},{value:"Test",id:"test",level:4},{value:"Clean",id:"clean",level:4},{value:"Modules",id:"modules",level:4},{value:"Packages",id:"packages",level:2},{value:"package and import",id:"package-and-import",level:3},{value:"Variable",id:"variable",level:2},{value:"Type Declaration",id:"type-declaration",level:3},{value:"Type conversions",id:"type-conversions",level:3},{value:"struct",id:"struct",level:3},{value:"array",id:"array",level:3},{value:"slice",id:"slice",level:3},{value:"map",id:"map",level:3},{value:"Flow Control",id:"flow-control",level:2},{value:"if",id:"if",level:3},{value:"for",id:"for",level:3},{value:"switch",id:"switch",level:3},{value:"defer",id:"defer",level:3},{value:"\u6267\u884c\u65f6\u673a",id:"\u6267\u884c\u65f6\u673a",level:4},{value:"\u5b9e\u8d28",id:"\u5b9e\u8d28",level:4},{value:"\u5e94\u7528\u573a\u666f",id:"\u5e94\u7528\u573a\u666f",level:4},{value:"Function",id:"function",level:2},{value:"Parameters and Return Value",id:"parameters-and-return-value",level:3},{value:"Methods",id:"methods",level:3},{value:"Receiver",id:"receiver",level:4},{value:"Interface",id:"interface",level:3},{value:"\u503c",id:"\u503c",level:4},{value:"Type Assertions",id:"type-assertions",level:4},{value:"Concurrent",id:"concurrent",level:2},{value:"goroutine",id:"goroutine",level:3},{value:"channels",id:"channels",level:3},{value:"select",id:"select",level:4},{value:"Worker Pools",id:"worker-pools",level:4}];function d(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"go-basic-notes",children:"Go Basic Notes"})}),"\n",(0,i.jsx)(e.h2,{id:"cli",children:"CLI"}),"\n",(0,i.jsx)(e.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:'sudo apt install golang\necho "export GOPATH=$HOME/gopath"\necho "export PATH=$PATH:$GOPATH/bin"\ngo env\n'})}),"\n",(0,i.jsx)(e.h3,{id:"basic-command",children:"Basic Command"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"go version\ngo run main.go\ngo fmt /path/to/test\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"go \u7684\u5927\u90e8\u5206\u5de5\u5177\u7684\u4f5c\u7528\u57fa\u672c\u5355\u4f4d\u4e3a package(directories)"}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"build",children:"Build"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# generate library\ngo build path/to/libpack\ngo install path/to/libpack\n\n# generate binary\ngo install path/to/mainpack\n"})}),"\n",(0,i.jsx)(e.h4,{id:"test",children:"Test"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"# path/to/pack/demo.go\n# path/to/pack/demo_test.go\ngo test path/to/pack\n"})}),"\n",(0,i.jsx)(e.h4,{id:"clean",children:"Clean"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"go clean -i path/to/pack\n"})}),"\n",(0,i.jsx)(e.h4,{id:"modules",children:"Modules"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Remote packages."}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"$GOPATH/bin/hello"}),"."]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"go get github.com/golang/example/hello\n"})}),"\n",(0,i.jsx)(e.h2,{id:"packages",children:"Packages"}),"\n",(0,i.jsx)(e.h3,{id:"package-and-import",children:"package and import"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"for path/to/pack:"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"package pack\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'import (\n    "path/to/pack"\n)\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u53ea\u6709\u9996\u5b57\u6bcd\u5927\u5199\u7684\u51fd\u6570\u624d\u53ef\u88ab\u6210\u529f\u5bfc\u51fa, \u9996\u5b57\u6bcd\u5c0f\u5199\u7684\u51fd\u6570\u4e3a\u6587\u4ef6\u79c1\u6709\u51fd\u6570"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"variable",children:"Variable"}),"\n",(0,i.jsx)(e.h3,{id:"type-declaration",children:"Type Declaration"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Go \u5c06\u7c7b\u578b\u7f6e\u4e8e\u53d8\u91cf\u540d\u540e\u7684\u7406\u7531: reads clearly, from left to right"}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:":="})," \u4e0d\u53ef\u7528\u5728\u51fd\u6570\u5916"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'// \u7b80\u5199\u7c7b\u578b/\u8d4b\u503c\nvar i,j int = 1, 2\n\n// \u7701\u7565\u7c7b\u578b\nvar c, python, java = true, false, "no!"\n\n// \u7701\u7565 var \u5173\u952e\u5b57\njavascript, ruby, cpp:= true, false, "no!"\n\n// \u58f0\u660e\u5757\nimport (\n    "math/cmplx"\n)\n\nvar (\n    ToBe   bool       = false\n    MaxInt uint64     = 1<<64 - 1\n    z      complex128 = cmplx.Sqrt(-5 + 12i)\n)\n'})}),"\n",(0,i.jsx)(e.h3,{id:"type-conversions",children:"Type conversions"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"var x int = 3\nvar y uint = uint(x)\nz := uint(x)\n"})}),"\n",(0,i.jsx)(e.h3,{id:"struct",children:"struct"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"type Vertex struct {\n    X int\n    Y int\n}\n\nvar (\n    v1 = Vertex{1, 2}\n    v2 = Vertex{X: 1}   // Y: 0\n    v3 = Vertex{}       // X: 0, Y: 0\n    vp = &Vertex{1, 2}  // *Vertex\n)\n"})}),"\n",(0,i.jsx)(e.h3,{id:"array",children:"array"}),"\n",(0,i.jsx)(e.p,{children:"\u6570\u7ec4\u7684\u957f\u5ea6\u662f\u5176\u7c7b\u578b\u7684\u4e00\u90e8\u5206"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'var a [2]string\na[0] = "Hello"\na[1] = "Golang"\n\nfmt.Println(a[0], a[1])\nfmt.Println(a)\n'})}),"\n",(0,i.jsx)(e.h3,{id:"slice",children:"slice"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["s[lo",":lo","] == nil"]}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'p := []int{2, 3, 5, 7, 11, 13}\n\nfmt.Println("p[1:4] ==", p[1:4])\nfmt.Println("p[:3] ==", p[:3])  // p[0:3]        => 0, 1, 2\nfmt.Println("p[4:]" ==, p[4:])  // p[4:len(p)-1] => 4, ..., len(p)-2\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"make \u51fd\u6570\u521b\u5efa slice"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"a := make([]int, 5)     // len(a) = 5\nb := make([]int, 0, 5)  // len(b) = 0, cap(b) = 5\nb = b[:cap(5)]          // len(b) = 5, cap(b) = 5\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"len && cap"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"// just shorten/extend, not drop elements\n// change len(p), keep cap(p)\np = p [:0]\np = p[:4]\n\n// drop its elements\n// change len(p) and cap(p)\np = p[2:]\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"append"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"append(s, 2, 3, 4)\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"range(iterator): \u8fd4\u56de 2 \u4e2a\u503c(index int, element copy(s[index]) T), \u5728\u6bcf\u4e00\u6b21\u8fed\u4ee3 index+=1"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'pow := []int{1, 2, 4, 8, 16, 32, 64, 128}\n\nfunc main() {\n    for i := range pow {\n        fmt.Printf("index == %d\\n", i)\n    }\n\n    for _, v := range pow {\n        fmt.Printf("value == %d\\n", v)\n    }\n\n    for i, v := range pow {\n        fmt.Printf("2**%d = %d\\n", i, v)\n    }\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"map",children:"map"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'type Vertex struct {\n    Lat, Long float64\n}\n\nvar m map[string]Vertex = make(map[string]Vertex)\nm["Bell Labs"] = Vertex{\n    40.68433, -74.39967\n}\n\nml := map[string]Vertex{\n    "Bell Labs": Vertex{\n        40.68433, -74.39967,\n    },\n    "Google": {37.42202, -122.08408},\n}\n\ndelete(m, "Bell Labs")\n\nelement, ok_flag := m["Google"]\n'})}),"\n",(0,i.jsx)(e.h2,{id:"flow-control",children:"Flow Control"}),"\n",(0,i.jsx)(e.h3,{id:"if",children:"if"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'if x < 0 {\n    return true\n}\n\n// scope of v: only in if/else statement\nif v := math.Pow(x, n); v < lim {\n    return v\n} else {\n    fmt.Printf("%g >= %g\\n", v, lim)\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"for",children:"for"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"for sum < 1000 {\n    sum += sum\n}\n\n// scope of i: only in for statement\nfor i := 0; i < 10; i++ {\n    sum += i\n}\n"})}),"\n",(0,i.jsx)(e.h3,{id:"switch",children:"switch"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"switch \u4e2d\u7684 case \u81ea\u52a8 break(\u9664\u975e\u4f7f\u7528 fallthrough \u8bed\u53e5)"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'switch time.Saturday {\n    case today+0:\n        fmt.Println("Today.")\n    case today+1:\n        fmt.Println("Tomorrow.")\n    case today+2:\n        fmt.Println("In two days.")\n    default:\n        fmt.Println("Too far away.")\n}\n\n// scope of os: only in switch statement\nswitch os := runtime.GOOS; os {\n    case "darwin":\n        fmt.Println("OS X.")\n    case "linux":\n        fmt.Println("Linux.")\n    default:\n        fmt.Printf("%s", os)\n}\n\n// alias for if-else long chain\nswitch {    // switch true\n    case t.Hour() < 12:\n        fmt.Println("Good morning!")\n    case t.Hour() < 17:\n        fmt.Println("Good afternoon!")\n    default:\n        fmt.Println("Good evening!")\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"defer",children:"defer"}),"\n",(0,i.jsx)(e.p,{children:"defer \u8bed\u53e5\u4f1a\u5c06\u51fd\u6570\u6267\u884c\u5ef6\u8fdf\u81f3\u4e0a\u5c42\u51fd\u6570\u8fd4\u56de\u5904(\u51fd\u6570\u53c2\u6570\u4f1a\u7acb\u523b\u751f\u6210):"}),"\n",(0,i.jsx)(e.h4,{id:"\u6267\u884c\u65f6\u673a",children:"\u6267\u884c\u65f6\u673a"}),"\n",(0,i.jsx)(e.p,{children:"\u51fd\u6570\u8bbe\u7f6e\u8fd4\u56de\u503c\u540e, \u5373\u5c06\u8fd4\u56de\u8c03\u7528\u51fd\u6570\u524d(\u82e5 defer \u51fd\u6570\u4fee\u6539\u8fd4\u56de\u53d8\u91cf, \u5219\u4f1a\u9020\u6210\u8fd4\u56de\u503c\u4e0e\u9884\u671f\u4e0d\u4e00\u81f4)"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'func main() {\n    defer fmt.Println("!")\n    defer fmt.Println("world")\n    fmt.Println("hello")\n}\n\n=>\n\nfunc main() {\n    fmt.Println("hello")\n    fmt.Println("world")\n    fmt.Println("!")\n}\n'})}),"\n",(0,i.jsx)(e.h4,{id:"\u5b9e\u8d28",children:"\u5b9e\u8d28"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"return_value"})," = xxx -> invoke defer functions(stack) -> return void"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"func f() (result int) {\n    defer func() {\n        result++\n    }()\n\n    return 0\n}\n\n=>\n\nfunc f() (result int) {\n    result = 0\n\n    func() {\n        result++\n    }()\n\n    return\n}\n"})}),"\n",(0,i.jsx)(e.h4,{id:"\u5e94\u7528\u573a\u666f",children:"\u5e94\u7528\u573a\u666f"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u8d44\u6e90\u56de\u6536"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"mu.Lock()\ndefer mu.Unlock()\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"panic \u5f02\u5e38\u7684\u6355\u83b7"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'func f() {\n    defer func() {\n        if r:= recover(); r!= nil {\n            fmt.Println("Recovered in f", r)\n        }\n    }()\n\n    fmt.Println("Calling g.")\n    g()\n    fmt.Println("Returned normally from g.")\n}\n\nfunc g() {\n    panic("ERROR")\n}\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u4fdd\u8bc1\u8bed\u53e5(\u5728\u53d1\u751f\u5f02\u5e38\u7684\u60c5\u51b5\u4e0b)\u59cb\u7ec8\u4f1a\u88ab\u6267\u884c"}),"\n",(0,i.jsx)(e.li,{children:"\u6709\u610f\u4fee\u6539\u8fd4\u56de\u503c"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"function",children:"Function"}),"\n",(0,i.jsx)(e.h3,{id:"parameters-and-return-value",children:"Parameters and Return Value"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u7b80\u5199\u53c2\u6570\u7c7b\u578b"}),"\n",(0,i.jsx)(e.li,{children:"\u591a\u503c\u8fd4\u56de\u51fd\u6570"}),"\n",(0,i.jsx)(e.li,{children:"\u547d\u540d\u8fd4\u56de\u503c(\u6ce8\u91ca\u6587\u6863)"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'func swap(x, y string) (string, string) {\n    return y, x\n}\n\nfunc swap_(x, y string) (x_, y_ string) {\n    x_, y_ = y, x\n    return\n}\n\nfunc main() {\n    a, b := swap("hello", "golang")\n    a_, b_ := swap_("hello", "golang")\n    fmt.Println(a, b)\n    fmt.Println(a_, b_)\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"methods",children:"Methods"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Go \u4e2d\u6ca1\u6709 class, \u4f46\u53ef\u4ee5\u5728 struct/\u540c\u4e00\u4e2a\u5305\u5185\u7684 type \u4e0a(receiver)\u5b9a\u4e49\u65b9\u6cd5"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"type Vertex struct {\n    X, Y float64\n}\n\nfunc (v *Vertex) Abs() float64 {\n    return math.Sqrt(v.X*v.X + v.Y*v.Y)\n}\n\nfunc main() {\n    v := &Vertex{3, 4}\n    fmt.Println(v.Abs())\n}\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"type MyFloat float64\n\nfunc (f MyFloat) Abs() float64 {\n    if f < 0 {\n        return float64(-f)\n    } else {\n        return float64(f)\n    }\n}\n\nfunc main() {\n    f := MyFloat(-math.Sqrt2)\n    fmt.Println(f.Abs())\n"})}),"\n",(0,i.jsx)(e.h4,{id:"receiver",children:"Receiver"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"pointer receiver: \u53ef\u4ee5\u6539\u53d8\u539f\u503c(call by reference)"}),"\n",(0,i.jsx)(e.li,{children:"value receive: \u4e0d\u53ef\u4ee5\u6539\u53d8\u539f\u503c(call by value)"}),"\n",(0,i.jsx)(e.li,{children:"\u8c03\u7528 methods \u65f6, \u53ef\u4ee5\u4e0d\u8003\u8651 v \u662f value/pointer, go \u4f1a\u81ea\u52a8\u5904\u7406"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"func (v *Vertex) changeV() {\n    v.X += 1\n    v.Y += 1\n}\n\nv.changeV() => (&v).changeV()\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"func (v Vertex) Abs() {\n    return abs(v)\n}\n\n(&v).Abs() => v.Abs()\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Best Practice: \u5728\u540c\u4e00\u4e2a\u7c7b\u578b\u4e0a\u5b9a\u4e49\u7684\u6240\u6709\u65b9\u6cd5\u6700\u597d\u7edf\u4e00 receiver \u7c7b\u578b(\u5168\u90e8 value receivers \u6216 \u5168\u90e8 pointer receivers)"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"interface",children:"Interface"}),"\n",(0,i.jsx)(e.h4,{id:"\u503c",children:"\u503c"}),"\n",(0,i.jsx)(e.p,{children:"(value, type)"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"var i I\nvar t *T\ni = t   // => (nil, *T)\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"var i I     // => (nil, nil)\n"})}),"\n",(0,i.jsx)(e.h4,{id:"type-assertions",children:"Type Assertions"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5355\u8fd4\u56de\u503c: \u65ad\u8a00\u5931\u8d25\u65f6\u4ea7\u751f panic"}),"\n",(0,i.jsx)(e.li,{children:"\u53cc\u8fd4\u56de\u503c: \u65ad\u8a00\u5931\u8d25\u65f6\u4e0d\u4ea7\u751f panic"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'// create empty interface, ("hello", string)\nvar i interface{} = "hello"\n\ns := i.(string)\ns, ok := i.(string) // => true\nf, ok := i.(float64)// => false(no panic)\nf := i.(float64)    // => false with panic\n'})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"type switches"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'switch v := i.(type) {\n    case int;\n        fmt.Println("Int.")\n    case string:\n        fmt.Println("String.")\n    default:\n        fmt.Printf("Other type.")\n}\n'})}),"\n",(0,i.jsx)(e.h2,{id:"concurrent",children:"Concurrent"}),"\n",(0,i.jsx)(e.h3,{id:"goroutine",children:"goroutine"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"go f(x, y, z)   // => execute in a new goroutine with share memory\n"})}),"\n",(0,i.jsx)(e.h3,{id:"channels",children:"channels"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"typed conduit(\u7c7b\u578b\u7ba1\u9053)"}),"\n",(0,i.jsx)(e.li,{children:"block execution"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"var c chan int = make(chan int)\n\nc <- sum    // send sum to channel c\nv := <-c    // receive from channel c, assign value to v\n"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:"func sum(s []int, c chan int) {\n    sum := 0\n\n    for _, v := range s {\n        sum += v\n    }\n\n    c <- sum\n}\n\nfunc main() {\n    s := []int{7, 2, 8, -9, 4, 0}\n\n    c := make(chan int)\n\n    go sum(s[:len(s)/2], c)\n    go sum(s[len(s/2):], c)\n\n    x, y = <-c, <-c\n\n    fmt.Println(x, y, x+y)\n}\n"})}),"\n",(0,i.jsx)(e.h4,{id:"select",children:"select"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"select(\u5f53\u6240\u6709\u60c5\u51b5\u90fd\u4e0d\u6ee1\u8db3\u65f6)\u53ef\u88ab\u963b\u585e"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'for {\n    select {\n        case c <- x:\n            x, y = y, x+y\n        case <- quit:\n            fmt.Println("quit")\n            return\n    }\n}\n'})}),"\n",(0,i.jsx)(e.h4,{id:"worker-pools",children:"Worker Pools"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-go",children:'package main\n\nimport "fmt"\nimport "time"\n\nfunc worker(id int, jobs <-chan int, results chan<- int) {\n    for j := range jobs {\n        fmt.Println("worker", id, "processing job", j)\n        time.Sleep(time.Second)\n        results <- j * 2\n    }\n}\n\nfunc main() {\n    jobs := make(chan int, 100)\n    results := make(chan int, 100)\n\n    for w := 1; w <= 3; w++ {\n        go worker(w, jobs, results)\n    }\n\n    for j := 1; j <= 9; j++ {\n        jobs <- j\n    }\n\n    close(jobs)\n\n    for a := 1; a <= 9; a++ {\n        <-results\n    }\n}\n'})})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},842:(n,e,l)=>{l.d(e,{R:()=>s,x:()=>t});var a=l(8101);const i={},r=a.createContext(i);function s(n){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:s(n.components),a.createElement(r.Provider,{value:e},n.children)}}}]);