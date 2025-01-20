// utils/csvExport.ts

interface ProductCSV {
    ID: string;
    Title: string;
    Price: number;
    DiscountedPrice?: number;
    DiscountPercentage?: number;
    Tags: string;
    IsNew: string;
    ImageURL: string;
  }
  
  export const formatProductForCSV = (product: any): ProductCSV => {
    const discountedPrice = product.dicountPercentage
      ? product.price * (1 - product.dicountPercentage / 100)
      : undefined;
  
    return {
      ID: product._id,
      Title: product.title,
      Price: product.price,
      DiscountedPrice: discountedPrice,
      DiscountPercentage: product.dicountPercentage || 0,
      Tags: product.tags.join(', '),
      IsNew: product.isNew ? 'Yes' : 'No',
      ImageURL: product.productImage
    };
  };
  
  export const exportToCSV = (products: any[], filename: string = 'products.csv') => {
    // Convert products to CSV format
    const csvProducts = products.map(formatProductForCSV);
    
    // Define headers
    const headers = [
      'ID',
      'Title',
      'Price',
      'DiscountedPrice',
      'DiscountPercentage',
      'Tags',
      'IsNew',
      'ImageURL'
    ];
  
    // Create CSV content
    let csvContent = headers.join(',') + '\n';
  
    // Add rows
    csvContent += csvProducts.map(product => {
      return headers.map(header => {
        const value = product[header as keyof ProductCSV];
        // Handle values that might contain commas
        if (typeof value === 'string' && value.includes(',')) {
          return `"${value}"`;
        }
        return value;
      }).join(',');
    }).join('\n');
  
    // Create and trigger download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };