# include<iostream>
using namespace std;
//function to print the minimum count of swaps to sort an array

int swapndcount(int a[] , int n){
    int count = 0;

    // Here we are counting number of times the swapping should be done
    for (int i = 0; i < n-1; i++)
    {
        for (int j = 0; j < n-1-i; j++)
        {
            if (a[j]>a[j+1])
            {
                swap(a[j],a[j+1]);
                count++;
            }
            
        }
        
    }


// Returning the count
    return count;
    
}


/*1 2 4 3
Output : 1*/
int main(){
   int n;
   cin>>n;
   int a[n];
   for (int i = 0; i < n; i++)
   {
       cin>>a[i];
   }
   
    cout<<swapndcount(a , n);
   
    return 0;
}