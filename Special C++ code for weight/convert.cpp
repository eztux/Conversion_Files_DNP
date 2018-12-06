#include <iostream>
#include <fstream>

using namespace std;

char firstChar(string first){
    return first.at(0);
}

int main(int argc, char** argv){
    if(argc < 4){
        cout << "Usage: ./a <filename> <delimeter> <quote>" << endl;
        return 0;
    }
    string filename = argv[1];
    // char delimeter = firstChar(argv[2]);
    // char quote = firstChar(argv[3]);
    char delimeter = '^';
    char quote = '~';

    ifstream inFS;
    ofstream outFS;

    inFS.open(filename);
    if(!inFS.is_open()){
        cout << "The file is not open" << endl;
        return 0;
    }

    outFS.open("result.txt");

    string temp = "";

    while(!inFS.eof()){
        getline(inFS, temp);
        for(int i = 0; i < temp.size(); i++){
            
            if(temp.at(i) == delimeter){
                if(temp.at(i+1) == delimeter){
                    outFS << "^^";
                    break;
                } 
                if(temp.at(i-1) != quote){
                    outFS << quote;
                }
            }
            outFS << temp.at(i);
            if (temp.at(i) == delimeter && temp.at(i+1) != quote){
                outFS << quote;
            }
        }
        outFS << endl;
    }


}