class InvalidCodonError < StandardError; end

class Translation  
  CODONS = { 'Methionine' => ['AUG'],
             'Phenylalanine' => ['UUU', 'UUC'],
             'Leucine' => ['UUA', 'UUG'],
             'Serine' => ['UCU', 'UCC', 'UCA', 'UCG'],
             'Tyrosine' => ['UAU', 'UAC'],
             'Cysteine' => ['UGU', 'UGC'],
             'Tryptophan' => ['UGG'],
             'STOP' => ['UAA', 'UAG', 'UGA']}

  def self.of_codon(_codon)
    CODONS.detect { |_, codon| codon.include?(_codon)}[0]
  end

  def self.of_rna(strand)
    codon_array = strand.scan(/.../)
    fail InvalidCodonError if (codon_array & CODONS.values.flatten).empty?
    codon_array = look_for_stop(codon_array)
    codon_array.map { |codon| self.of_codon(codon) }
  end

  class << self
    private
    
    def look_for_stop(codon_array)
      return codon_array if (codon_array & CODONS['STOP']).empty?
      codon_array.slice(0, codon_array.index(*codon_array & CODONS['STOP']))
      end
  end
end