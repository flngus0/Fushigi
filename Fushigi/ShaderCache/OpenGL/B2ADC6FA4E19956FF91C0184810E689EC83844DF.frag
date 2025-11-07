#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_fragment_shader_interlock : enable
#extension GL_NV_viewport_array2 : enable
#pragma optionNV(fastmath off)

const int undef = 0;

layout (binding = 0, std140) uniform _support_buffer
{
    uint alpha_test;
    uint is_bgra[8];
    precise vec4 viewport_inverse;
    precise vec4 viewport_size;
    int frag_scale_count;
    precise float render_scale[73];
    ivec4 tfe_offset;
    int tfe_vertex_count;
} support_buffer;

layout (binding = 6, std140) uniform _fp_c5
{
    precise vec4 data[4096];
} fp_c5;

layout (binding = 7, std140) uniform _fp_c6
{
    precise vec4 data[4096];
} fp_c6;

layout (binding = 2, std140) uniform _fp_c1
{
    precise vec4 data[4096];
} fp_c1;

layout (binding = 4, std140) uniform _fp_c3
{
    precise vec4 data[4096];
} fp_c3;

layout (binding = 0) uniform sampler2D fp_t_tcb_8;
layout (binding = 1) uniform sampler2D fp_t_tcb_26;
layout (binding = 2) uniform samplerCube fp_t_tcb_16;
layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 3) in vec4 in_attr3;
layout (location = 4) in vec4 in_attr4;
layout (location = 5) in vec4 in_attr5;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise vec2 temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    precise float temp_6;
    precise float temp_7;
    precise float temp_8;
    precise vec2 temp_9;
    precise float temp_10;
    precise float temp_11;
    precise float temp_12;
    precise float temp_13;
    precise float temp_14;
    precise float temp_15;
    precise float temp_16;
    precise float temp_17;
    precise float temp_18;
    precise float temp_19;
    precise float temp_20;
    precise float temp_21;
    precise float temp_22;
    precise float temp_23;
    precise float temp_24;
    precise float temp_25;
    precise float temp_26;
    precise float temp_27;
    precise float temp_28;
    precise float temp_29;
    precise float temp_30;
    precise float temp_31;
    precise float temp_32;
    precise float temp_33;
    precise float temp_34;
    precise float temp_35;
    precise float temp_36;
    precise float temp_37;
    precise float temp_38;
    precise float temp_39;
    precise float temp_40;
    precise float temp_41;
    precise float temp_42;
    precise float temp_43;
    precise float temp_44;
    precise float temp_45;
    precise float temp_46;
    precise float temp_47;
    precise float temp_48;
    precise float temp_49;
    precise float temp_50;
    precise float temp_51;
    precise float temp_52;
    precise float temp_53;
    precise float temp_54;
    precise float temp_55;
    precise float temp_56;
    precise float temp_57;
    precise float temp_58;
    precise float temp_59;
    precise float temp_60;
    precise float temp_61;
    precise float temp_62;
    precise float temp_63;
    precise float temp_64;
    precise float temp_65;
    precise float temp_66;
    precise float temp_67;
    precise float temp_68;
    precise float temp_69;
    precise float temp_70;
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    precise float temp_74;
    precise float temp_75;
    precise float temp_76;
    precise float temp_77;
    precise float temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    precise float temp_84;
    precise float temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
    precise float temp_92;
    precise float temp_93;
    precise float temp_94;
    precise float temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    precise float temp_99;
    precise float temp_100;
    precise vec3 temp_101;
    precise float temp_102;
    precise float temp_103;
    precise float temp_104;
    precise float temp_105;
    precise float temp_106;
    precise float temp_107;
    precise float temp_108;
    precise float temp_109;
    precise float temp_110;
    precise float temp_111;
    precise float temp_112;
    precise float temp_113;
    precise float temp_114;
    precise float temp_115;
    precise float temp_116;
    precise float temp_117;
    precise float temp_118;
    precise float temp_119;
    precise float temp_120;
    precise float temp_121;
    precise float temp_122;
    precise float temp_123;
    precise float temp_124;
    precise float temp_125;
    precise float temp_126;
    precise float temp_127;
    precise float temp_128;
    precise float temp_129;
    precise float temp_130;
    precise float temp_131;
    precise float temp_132;
    precise float temp_133;
    precise float temp_134;
    precise float temp_135;
    precise float temp_136;
    precise float temp_137;
    precise float temp_138;
    precise float temp_139;
    precise float temp_140;
    precise float temp_141;
    precise float temp_142;
    precise float temp_143;
    precise float temp_144;
    precise float temp_145;
    precise float temp_146;
    precise float temp_147;
    precise float temp_148;
    precise float temp_149;
    precise float temp_150;
    precise float temp_151;
    precise float temp_152;
    precise float temp_153;
    precise float temp_154;
    precise float temp_155;
    precise float temp_156;
    precise float temp_157;
    precise float temp_158;
    precise float temp_159;
    precise float temp_160;
    precise float temp_161;
    precise float temp_162;
    precise float temp_163;
    precise float temp_164;
    precise float temp_165;
    precise float temp_166;
    precise float temp_167;
    precise float temp_168;
    precise float temp_169;
    precise float temp_170;
    precise float temp_171;
    precise float temp_172;
    precise float temp_173;
    precise float temp_174;
    precise float temp_175;
    precise float temp_176;
    precise float temp_177;
    precise float temp_178;
    precise float temp_179;
    precise float temp_180;
    precise float temp_181;
    precise float temp_182;
    precise float temp_183;
    precise float temp_184;
    precise float temp_185;
    precise float temp_186;
    precise float temp_187;
    precise float temp_188;
    precise float temp_189;
    precise float temp_190;
    precise float temp_191;
    precise float temp_192;
    // 0x000008: 0xE003FF87CFF7FF00 Ipa
    // 0x000010: 0x5080000000470000 Mufu
    // 0x000018: 0xE043FF8D8007FF04 Ipa
    temp_0 = in_attr5.z;
    // 0x000028: 0xE043FF8DC007FF05 Ipa
    temp_1 = in_attr5.w;
    // 0x000030: 0xD830008FF0570404 Texs
    temp_2 = texture(fp_t_tcb_8, vec2(temp_0, temp_1)).xy;
    temp_3 = temp_2.x;
    temp_4 = temp_2.y;
    // 0x000038: 0xE043FF8D0007FF01 Ipa
    temp_5 = in_attr5.x;
    // 0x000048: 0xE043FF8D4007FF02 Ipa
    temp_6 = in_attr5.y;
    // 0x000050: 0x49A0009405870403 Ffma
    temp_7 = fma(temp_3, fp_c5.data[22].x, temp_5);
    // 0x000058: 0x49A0011405970502 Ffma
    temp_8 = fma(temp_4, fp_c5.data[22].y, temp_6);
    // 0x000068: 0xD830026FF0270302 Texs
    temp_9 = texture(fp_t_tcb_26, vec2(temp_7, temp_8)).xy;
    temp_10 = temp_9.x;
    temp_11 = temp_9.y;
    // 0x000070: 0xE043FF8A0007FF0C Ipa
    temp_12 = in_attr2.x;
    // 0x000078: 0xE043FF8A4007FF01 Ipa
    temp_13 = in_attr2.y;
    // 0x000088: 0xE043FF890007FF0B Ipa
    temp_14 = in_attr1.x;
    // 0x000090: 0xE043FF8A8007FF09 Ipa
    temp_15 = in_attr2.z;
    // 0x000098: 0xE043FF894007FF07 Ipa
    temp_16 = in_attr1.y;
    // 0x0000A8: 0xE043FF898007FF08 Ipa
    temp_17 = in_attr1.z;
    // 0x0000B0: 0x5C68100000C70C04 Fmul
    temp_18 = temp_12 * temp_12;
    // 0x0000B8: 0x5C68100000B70B05 Fmul
    temp_19 = temp_14 * temp_14;
    // 0x0000C8: 0x59A0020000170104 Ffma
    temp_20 = fma(temp_13, temp_13, temp_18);
    // 0x0000D0: 0x59A0028000770706 Ffma
    temp_21 = fma(temp_16, temp_16, temp_19);
    // 0x0000D8: 0xE043FF884007FF05 Ipa
    temp_22 = in_attr0.y;
    // 0x0000E8: 0x59A002000097090A Ffma
    temp_23 = fma(temp_15, temp_15, temp_20);
    // 0x0000F0: 0xE043FF880007FF04 Ipa
    temp_24 = in_attr0.x;
    // 0x0000F8: 0x59A003000087080D Ffma
    temp_25 = fma(temp_17, temp_17, temp_21);
    // 0x000108: 0x5080000000570A0A Mufu
    temp_26 = inversesqrt(temp_23);
    // 0x000110: 0xE043FF888007FF06 Ipa
    temp_27 = in_attr0.z;
    // 0x000118: 0x5080000000570D0D Mufu
    temp_28 = inversesqrt(temp_25);
    // 0x000128: 0x5C68100000A70101 Fmul
    temp_29 = temp_13 * temp_26;
    // 0x000130: 0x5C68100000A70909 Fmul
    temp_30 = temp_15 * temp_26;
    // 0x000138: 0x5C68100000D70B0B Fmul
    temp_31 = temp_14 * temp_28;
    // 0x000148: 0x5C68100000D70707 Fmul
    temp_32 = temp_16 * temp_28;
    // 0x000150: 0x5C68100000D70808 Fmul
    temp_33 = temp_17 * temp_28;
    // 0x000158: 0x5C68100000A70C0C Fmul
    temp_34 = temp_12 * temp_26;
    // 0x000168: 0x5C6810000047040A Fmul
    temp_35 = temp_24 * temp_24;
    // 0x000170: 0x59A005000057050F Ffma
    temp_36 = fma(temp_22, temp_22, temp_35);
    // 0x000178: 0xE043FF8B8007FF0A Ipa
    temp_37 = in_attr3.z;
    // 0x000188: 0x59A007800067060F Ffma
    temp_38 = fma(temp_27, temp_27, temp_36);
    // 0x000190: 0x5080000000570F0F Mufu
    temp_39 = inversesqrt(temp_38);
    // 0x000198: 0x5C68100000F70404 Fmul
    temp_40 = temp_24 * temp_39;
    // 0x0001A8: 0x5C68100000F70505 Fmul
    temp_41 = temp_22 * temp_39;
    // 0x0001B0: 0x5C68100000F70606 Fmul
    temp_42 = temp_27 * temp_39;
    // 0x0001B8: 0x5C6810000017030D Fmul
    temp_43 = temp_11 * temp_29;
    // 0x0001C8: 0xE043FF8B0007FF01 Ipa
    temp_44 = in_attr3.x;
    // 0x0001D0: 0x5C68100000C7030C Fmul
    temp_45 = temp_11 * temp_34;
    // 0x0001D8: 0x59A0068000770207 Ffma
    temp_46 = fma(temp_10, temp_32, temp_43);
    // 0x0001E8: 0x5C6810000097030D Fmul
    temp_47 = temp_11 * temp_30;
    // 0x0001F0: 0xE043FF8B4007FF09 Ipa
    temp_48 = in_attr3.y;
    // 0x0001F8: 0x59A0060000B7020B Ffma
    temp_49 = fma(temp_10, temp_31, temp_45);
    // 0x000208: 0x59A0068000870208 Ffma
    temp_50 = fma(temp_10, temp_33, temp_47);
    // 0x000210: 0x5C6810000017010C Fmul
    temp_51 = temp_44 * temp_44;
    // 0x000218: 0x59A006000097090D Ffma
    temp_52 = fma(temp_48, temp_48, temp_51);
    // 0x000228: 0x5C6810000037030C Fmul
    temp_53 = temp_11 * temp_11;
    // 0x000230: 0x59A0068000A70A0E Ffma
    temp_54 = fma(temp_37, temp_37, temp_52);
    // 0x000238: 0x59A006000027020C Ffma
    temp_55 = fma(temp_10, temp_10, temp_53);
    // 0x000248: 0x5080000000570E03 Mufu
    temp_56 = inversesqrt(temp_54);
    // 0x000250: 0x385D103F80070C0C Fadd
    temp_57 = 0.0 - temp_55;
    temp_58 = temp_57 + 1.0;
    temp_59 = clamp(temp_58, 0.0, 1.0);
    // 0x000258: 0x5080000000870C0D Mufu
    temp_60 = sqrt(temp_59);
    // 0x000268: 0x5C69100000370101 Fmul
    temp_61 = 0.0 - temp_56;
    temp_62 = temp_44 * temp_61;
    // 0x000270: 0x5C69100000370902 Fmul
    temp_63 = 0.0 - temp_56;
    temp_64 = temp_48 * temp_63;
    // 0x000278: 0x5C69100000370A03 Fmul
    temp_65 = 0.0 - temp_56;
    temp_66 = temp_37 * temp_65;
    // 0x000288: 0x4C58301805C70109 Fadd
    temp_67 = 0.0 - fp_c6.data[23].x;
    temp_68 = temp_62 + temp_67;
    // 0x000290: 0x4C58301805D7020A Fadd
    temp_69 = 0.0 - fp_c6.data[23].y;
    temp_70 = temp_64 + temp_69;
    // 0x000298: 0x59A0058000470D04 Ffma
    temp_71 = fma(temp_60, temp_40, temp_49);
    // 0x0002A8: 0x59A0038000570D05 Ffma
    temp_72 = fma(temp_60, temp_41, temp_46);
    // 0x0002B0: 0x59A0040000670D06 Ffma
    temp_73 = fma(temp_60, temp_42, temp_50);
    // 0x0002B8: 0x4C58301805E70307 Fadd
    temp_74 = 0.0 - fp_c6.data[23].z;
    temp_75 = temp_66 + temp_74;
    // 0x0002C8: 0x5C6810000097090B Fmul
    temp_76 = temp_68 * temp_68;
    // 0x0002D0: 0x5C68100000470408 Fmul
    temp_77 = temp_71 * temp_71;
    // 0x0002D8: 0x59A0058000A70A0C Ffma
    temp_78 = fma(temp_70, temp_70, temp_76);
    // 0x0002E8: 0x59A004000057050B Ffma
    temp_79 = fma(temp_72, temp_72, temp_77);
    // 0x0002F0: 0x59A006000077070E Ffma
    temp_80 = fma(temp_75, temp_75, temp_78);
    // 0x0002F8: 0x5080000000570E08 Mufu
    temp_81 = inversesqrt(temp_80);
    // 0x000308: 0x59A005800067060B Ffma
    temp_82 = fma(temp_73, temp_73, temp_79);
    // 0x000310: 0x5080000000570B0B Mufu
    temp_83 = inversesqrt(temp_82);
    // 0x000318: 0x5C6810000087090C Fmul
    temp_84 = temp_68 * temp_81;
    // 0x000328: 0x5C68100000870A0D Fmul
    temp_85 = temp_70 * temp_81;
    // 0x000330: 0x5C68100000B7040A Fmul
    temp_86 = temp_71 * temp_83;
    // 0x000338: 0x5C68100000B70509 Fmul
    temp_87 = temp_72 * temp_83;
    // 0x000348: 0x5C68100000C7010C Fmul
    temp_88 = temp_62 * temp_84;
    // 0x000350: 0x5C62578000970A04 Fmnmx
    temp_89 = abs(temp_86);
    temp_90 = abs(temp_87);
    temp_91 = max(temp_89, temp_90);
    // 0x000358: 0x59A0060000D7020C Ffma
    temp_92 = fma(temp_64, temp_85, temp_88);
    // 0x000368: 0x5C68100000B7060D Fmul
    temp_93 = temp_73 * temp_83;
    // 0x000370: 0x5C60578000470D0E Fmnmx
    temp_94 = abs(temp_93);
    temp_95 = max(temp_94, temp_91);
    // 0x000378: 0x5080000000470E0F Mufu
    temp_96 = 1.0 / temp_95;
    // 0x000388: 0x5C68100000F70A04 Fmul
    temp_97 = temp_86 * temp_96;
    // 0x000390: 0x5C68100000F70905 Fmul
    temp_98 = temp_87 * temp_96;
    // 0x000398: 0x5C69100000F70D06 Fmul
    temp_99 = 0.0 - temp_96;
    temp_100 = temp_93 * temp_99;
    // 0x0003A8: 0xC0BA0163EFF70404 Tex
    temp_101 = textureLod(fp_t_tcb_16, vec3(temp_97, temp_98, temp_100), 0.0).xyz;
    temp_102 = temp_101.x;
    temp_103 = temp_101.y;
    temp_104 = temp_101.z;
    // 0x0003B0: 0x5C68100000170A0B Fmul
    temp_105 = temp_86 * temp_62;
    // 0x0003B8: 0x5C68100000870701 Fmul
    temp_106 = temp_75 * temp_81;
    // 0x0003C8: 0x4C69101805C70A0A Fmul
    temp_107 = 0.0 - fp_c6.data[23].x;
    temp_108 = temp_86 * temp_107;
    // 0x0003D0: 0x59A0058000270902 Ffma
    temp_109 = fma(temp_87, temp_64, temp_105);
    // 0x0003D8: 0x4C9807980907000B Mov
    // 0x0003E8: 0x59A406000017030C Ffma
    temp_110 = fma(temp_66, temp_106, temp_92);
    temp_111 = clamp(temp_110, 0.0, 1.0);
    // 0x0003F0: 0x49A1051805D7090A Ffma
    temp_112 = 0.0 - fp_c6.data[23].y;
    temp_113 = fma(temp_87, temp_112, temp_108);
    // 0x0003F8: 0x59A4010000370D02 Ffma
    temp_114 = fma(temp_93, temp_66, temp_109);
    temp_115 = clamp(temp_114, 0.0, 1.0);
    // 0x000408: 0x01040DF760C7F003 Mov32i
    // 0x000410: 0x49A5051805E70D0D Ffma
    temp_116 = 0.0 - fp_c6.data[23].z;
    temp_117 = fma(temp_93, temp_116, temp_113);
    temp_118 = clamp(temp_117, 0.0, 1.0);
    // 0x000418: 0x4C9807980097000A Mov
    // 0x000428: 0x51A1059809070202 Ffma
    temp_119 = 0.0 - fp_c6.data[36].x;
    temp_120 = fma(temp_115, temp_119, fp_c6.data[36].x);
    // 0x000430: 0x49A2018400170C03 Ffma
    temp_121 = fma(temp_111, fp_c1.data[0].y, -6.98316002);
    // 0x000438: 0x5080400000370202 Mufu
    temp_122 = abs(temp_120);
    temp_123 = log2(temp_122);
    // 0x000448: 0x0103F0000007F00B Mov32i
    // 0x000450: 0x5C68100000370C03 Fmul
    temp_124 = temp_111 * temp_121;
    // 0x000458: 0x4C68101809170201 Fmul
    temp_125 = temp_123 * fp_c6.data[36].y;
    // 0x000468: 0x4C98079809B70002 Mov
    // 0x000470: 0x5C90008000170008 Rro
    // 0x000478: 0x4C58101408170202 Fadd
    temp_126 = fp_c6.data[38].w + fp_c5.data[32].y;
    // 0x000488: 0x5084000000270807 Mufu
    temp_127 = exp2(temp_125);
    temp_128 = clamp(temp_127, 0.0, 1.0);
    // 0x000490: 0x5C90008000370001 Rro
    // 0x000498: 0x32A005BF00070903 Ffma
    temp_129 = fma(temp_87, 0.5, 0.5);
    // 0x0004A8: 0x5080000000270101 Mufu
    temp_130 = exp2(temp_124);
    // 0x0004B0: 0x4C98079800870009 Mov
    // 0x0004B8: 0x4C98079800A7000B Mov
    // 0x0004C8: 0x4C59101800470909 Fadd
    temp_131 = 0.0 - fp_c6.data[2].x;
    temp_132 = temp_131 + fp_c6.data[1].x;
    // 0x0004D0: 0x4C59101800670B08 Fadd
    temp_133 = 0.0 - fp_c6.data[2].z;
    temp_134 = temp_133 + fp_c6.data[1].z;
    // 0x0004D8: 0x5C68100000270707 Fmul
    temp_135 = temp_128 * temp_126;
    // 0x0004E8: 0x4C59101800570A02 Fadd
    temp_136 = 0.0 - fp_c6.data[2].y;
    temp_137 = temp_136 + fp_c6.data[1].y;
    // 0x0004F0: 0x4C68101801570D0A Fmul
    temp_138 = temp_118 * fp_c6.data[5].y;
    // 0x0004F8: 0x49A1009407B70101 Ffma
    temp_139 = 0.0 - fp_c5.data[30].w;
    temp_140 = fma(temp_130, temp_139, temp_130);
    // 0x000508: 0x51A0019800870909 Ffma
    temp_141 = fma(temp_132, temp_129, fp_c6.data[2].x);
    // 0x000510: 0x51A0019800970202 Ffma
    temp_142 = fma(temp_137, temp_129, fp_c6.data[2].y);
    // 0x000518: 0x1E23EA2F98370A0B Fmul32i
    temp_143 = temp_138 * 0.318309873;
    // 0x000528: 0x51A0019800A70803 Ffma
    temp_144 = fma(temp_134, temp_129, fp_c6.data[2].z);
    // 0x000530: 0x4C58101407B7010A Fadd
    temp_145 = temp_140 + fp_c5.data[30].w;
    // 0x000538: 0x4C68101808D70701 Fmul
    temp_146 = temp_135 * fp_c6.data[35].y;
    // 0x000548: 0x4C68101801670D08 Fmul
    temp_147 = temp_118 * fp_c6.data[5].z;
    // 0x000550: 0x4C68101801470D0D Fmul
    temp_148 = temp_118 * fp_c6.data[5].x;
    // 0x000558: 0x59A1058000A70B0C Ffma
    temp_149 = 0.0 - temp_145;
    temp_150 = fma(temp_143, temp_149, temp_143);
    // 0x000568: 0x1E23EA2F9837080B Fmul32i
    temp_151 = temp_147 * 0.318309873;
    // 0x000570: 0x1E23EA2F98370D0D Fmul32i
    temp_152 = temp_148 * 0.318309873;
    // 0x000578: 0x59A1058000A70B0B Ffma
    temp_153 = 0.0 - temp_145;
    temp_154 = fma(temp_151, temp_153, temp_151);
    // 0x000588: 0x49A0020400070904 Ffma
    temp_155 = fma(temp_141, fp_c1.data[0].x, temp_102);
    // 0x000590: 0x49A1009408270109 Ffma
    temp_156 = 0.0 - fp_c5.data[32].z;
    temp_157 = fma(temp_146, temp_156, temp_146);
    // 0x000598: 0x49A0028400070202 Ffma
    temp_158 = fma(temp_142, fp_c1.data[0].x, temp_103);
    // 0x0005A8: 0x49A0030400070306 Ffma
    temp_159 = fma(temp_144, fp_c1.data[0].x, temp_104);
    // 0x0005B0: 0x5C58100000C70908 Fadd
    temp_160 = temp_157 + temp_150;
    // 0x0005B8: 0x4C68101808C70709 Fmul
    temp_161 = temp_135 * fp_c6.data[35].x;
    // 0x0005C8: 0x59A1068000A70D0C Ffma
    temp_162 = 0.0 - temp_145;
    temp_163 = fma(temp_152, temp_162, temp_152);
    // 0x0005D0: 0x4C68101808E7070A Fmul
    temp_164 = temp_135 * fp_c6.data[35].z;
    // 0x0005D8: 0xE043FF8C8007FF07 Ipa
    temp_165 = in_attr4.z;
    // 0x0005E8: 0x5C58100000870202 Fadd
    temp_166 = temp_158 + temp_160;
    // 0x0005F0: 0x49A1049408270905 Ffma
    temp_167 = 0.0 - fp_c5.data[32].z;
    temp_168 = fma(temp_161, temp_167, temp_161);
    // 0x0005F8: 0x0103F8000007F008 Mov32i
    // 0x000608: 0x49A1051408270A0D Ffma
    temp_169 = 0.0 - fp_c5.data[32].z;
    temp_170 = fma(temp_164, temp_169, temp_164);
    // 0x000610: 0x4C68101408270909 Fmul
    temp_171 = temp_161 * fp_c5.data[32].z;
    // 0x000618: 0x4C68101408270A0A Fmul
    temp_172 = temp_164 * fp_c5.data[32].z;
    // 0x000628: 0x5C58100000C70505 Fadd
    temp_173 = temp_168 + temp_163;
    // 0x000630: 0x4C5C101402C70800 Fadd
    temp_174 = 1.0 + fp_c5.data[11].x;
    temp_175 = clamp(temp_174, 0.0, 1.0);
    // 0x000638: 0x5C58100000B70D0B Fadd
    temp_176 = temp_170 + temp_154;
    // 0x000648: 0x5C58100000570403 Fadd
    temp_177 = temp_155 + temp_173;
    // 0x000650: 0x4C68101408270104 Fmul
    temp_178 = temp_146 * fp_c5.data[32].z;
    // 0x000658: 0x5C58100000B70605 Fadd
    temp_179 = temp_159 + temp_176;
    // 0x000668: 0x4C5C101402D70801 Fadd
    temp_180 = 1.0 + fp_c5.data[11].y;
    temp_181 = clamp(temp_180, 0.0, 1.0);
    // 0x000670: 0x5C9807800FF70006 Mov
    // 0x000678: 0x49A0049402C70303 Ffma
    temp_182 = fma(temp_177, fp_c5.data[11].x, temp_171);
    // 0x000688: 0x49A0021402D70204 Ffma
    temp_183 = fma(temp_166, fp_c5.data[11].y, temp_178);
    // 0x000690: 0x49A0051402E70505 Ffma
    temp_184 = fma(temp_179, fp_c5.data[11].z, temp_172);
    // 0x000698: 0x4C5C101402E70802 Fadd
    temp_185 = 1.0 + fp_c5.data[11].z;
    temp_186 = clamp(temp_185, 0.0, 1.0);
    // 0x0006A8: 0x5C68100000370000 Fmul
    temp_187 = temp_175 * temp_182;
    // 0x0006B0: 0x5C68100000470101 Fmul
    temp_188 = temp_181 * temp_183;
    // 0x0006B8: 0x4C58100C03870704 Fadd
    temp_189 = temp_165 + fp_c3.data[14].x;
    // 0x0006C8: 0x5C68100000570202 Fmul
    temp_190 = temp_186 * temp_184;
    // 0x0006D0: 0x0103F8000007F003 Mov32i
    // 0x0006D8: 0x0103F8000007F005 Mov32i
    // 0x0006E8: 0x0103F8000007F007 Mov32i
    // 0x0006F0: 0x49A37F8C03C70404 Ffma
    temp_191 = 0.0 - fp_c3.data[15].x;
    temp_192 = fma(temp_189, temp_191, -0.0);
    // 0x0006F8: 0xE30000000007000F Exit
    out_attr0.x = temp_187;
    out_attr0.y = temp_188;
    out_attr0.z = temp_190;
    out_attr0.w = 1.0;
    out_attr1.x = temp_192;
    out_attr1.y = 1.0;
    out_attr1.z = 0.0;
    out_attr1.w = 1.0;
    return;
}
