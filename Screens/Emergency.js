import * as React from 'react';
import { DataTable } from 'react-native-paper';

const Emergency = () => (
  <DataTable>
    <DataTable.Header>
      <DataTable.Title>Emergency sector</DataTable.Title>
      <DataTable.Title >
        Phone Number 
      </DataTable.Title>
      
    </DataTable.Header>

    <DataTable.Row>
      <DataTable.Cell>Red Cross</DataTable.Cell>
      <DataTable.Cell numeric>140</DataTable.Cell>
      
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Police</DataTable.Cell>
      <DataTable.Cell numeric>112</DataTable.Cell>
      
    </DataTable.Row>
    <DataTable.Row>
      <DataTable.Cell>Fire Department</DataTable.Cell>
      <DataTable.Cell numeric>175</DataTable.Cell>
      
    </DataTable.Row>
    <DataTable.Row>

      <DataTable.Cell>General Security</DataTable.Cell>
      <DataTable.Cell numeric>1717</DataTable.Cell>
      
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Civil defense</DataTable.Cell>
      <DataTable.Cell numeric>125</DataTable.Cell>
      
    </DataTable.Row>
    <DataTable.Row>
    <DataTable.Cell>Lebanese Army</DataTable.Cell>
      <DataTable.Cell numeric>1701</DataTable.Cell>
      
    </DataTable.Row>
<DataTable.Row>
    <DataTable.Cell>Military Operation's Room</DataTable.Cell>
      <DataTable.Cell numeric>117</DataTable.Cell>
      
    </DataTable.Row>

 
  </DataTable>
);

export default Emergency;
